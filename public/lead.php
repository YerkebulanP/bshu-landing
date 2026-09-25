<?php
declare(strict_types=1);

/**
 * Приём заявок с формы лендинга на обычном (Plesk/Apache/PHP) хостинге —
 * замена Next-роута /api/lead, которого в статической сборке нет.
 *
 * Принимает JSON { name, role, school, contact, comment } и шлёт письмо.
 * Отвечает JSON { ok: true } / { ok: false, error } — тот же контракт,
 * что и у /api/lead, поэтому форма на фронте не отличает одно от другого.
 */

// ── Настройки (ПРАВИТЬ ЗДЕСЬ) ─────────────────────────────────────────
// Куда приходят заявки. Создайте ящик в Plesk → «Почта» (или впишите любой другой).
const LEAD_TO = 'hello@upgradeplatform.kz';
// Отправитель — ящик на ЭТОМ ЖЕ домене: так письма реже попадают в спам.
const LEAD_FROM = 'noreply@upgradeplatform.kz';
// Максимальная длина каждого поля.
const MAX_LEN = 2000;
// ───────────────────────────────────────────────────────────────────────

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Заявки принимаем только с нашего же сайта.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? '')) {
    respond(403, ['ok' => false, 'error' => 'Forbidden']);
}

$data = json_decode((string) file_get_contents('php://input', false, null, 0, 20000), true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'error' => 'Invalid JSON']);
}

$clean = static function (mixed $value): string {
    $text = is_string($value) ? trim($value) : '';
    // Убираем управляющие символы (кроме \n и \t в комментарии).
    $text = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $text) ?? '';
    return mb_substr($text, 0, MAX_LEN);
};

$name = $clean($data['name'] ?? '');
$role = $clean($data['role'] ?? '');
$school = $clean($data['school'] ?? '');
$contact = $clean($data['contact'] ?? '');
$comment = $clean($data['comment'] ?? '');

if ($name === '' || $school === '' || $contact === '') {
    respond(400, ['ok' => false, 'error' => 'Missing required fields']);
}

$oneLine = static fn (string $s): string => trim((string) preg_replace('/\s+/u', ' ', $s));

$subject = mb_encode_mimeheader('Заявка на демо: ' . mb_substr($oneLine($school), 0, 80), 'UTF-8', 'B');
$body = implode("\n", [
    'Новая заявка на демо UPgrade Platform',
    '',
    "Имя:         {$name}",
    'Должность:   ' . ($role !== '' ? $role : '—'),
    "Организация: {$school}",
    "Контакт:     {$contact}",
    'Комментарий: ' . ($comment !== '' ? $comment : '—'),
    '',
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? '—') . ' · ' . date('Y-m-d H:i:s'),
]);

$headers = [
    'From' => LEAD_FROM,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
];
// Reply-To только если контакт — валидный email (заодно исключает инъекцию заголовков).
if (filter_var($contact, FILTER_VALIDATE_EMAIL)) {
    $headers['Reply-To'] = $contact;
}

if (!mail(LEAD_TO, $subject, $body, $headers)) {
    error_log('[lead] mail() failed for school: ' . $oneLine($school));
    respond(500, ['ok' => false, 'error' => 'Mail failed']);
}

respond(200, ['ok' => true]);
