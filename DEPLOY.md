# Деплой лендинга

Два способа — по типу хостинга:

| | Где | Как |
|---|---|---|
| **A. Статика** (основной) | обычный хостинг hoster.kz / ps.kz (Plesk, Apache, PHP) — без Node | `npm run build:static` → загрузить папку `out/` |
| **B. Node-сервер** | VPS (Docker) | `docker compose up -d --build` — см. раздел внизу |

---

## A. Хостинг hoster.kz (Plesk) — статика

Лендинг собирается в готовые HTML/CSS/JS-файлы (`out/`), сервер на Node не нужен.
Форма заявки обрабатывается PHP-скриптом `lead.php` (на хостинге есть PHP 8.x).

### Разовая настройка в Plesk

1. **DNS.** Записи `A` для `upgradeplatform.kz` и `www` должны указывать на IP хостинга
   (он показан в карточке домена). Проверка: `nslookup upgradeplatform.kz`.
2. **Корневая папка сайта.** «Хостинг и DNS» → «Настройки хостинга» → «Корневой каталог
   документов». Сейчас это папка `upgradeplatform.kz` (в ней лежит заглушка `index.html`
   и `cgi-bin`). Если у вас указано `httpdocs` — заливайте туда.
3. **HTTPS.** «SSL/TLS-сертификаты» → «Let's Encrypt» → установить бесплатный сертификат
   (галочки на домен и `www`). Затем в «Настройках хостинга» включить
   «Постоянное SEO-безопасное перенаправление 301 с HTTP на HTTPS». Сейчас в панели
   «Домен не защищён» — это надо сделать до запуска.
4. **Почта для заявок.** «Почта» → создать ящики `hello@upgradeplatform.kz` (получатель)
   и `noreply@upgradeplatform.kz` (отправитель). Другие адреса — поправьте
   `LEAD_TO` / `LEAD_FROM` вверху `public/lead.php`.

### Каждый деплой

```bash
# (опционально) адрес приложения для кнопки «Вход для участников»:
#   PowerShell:  $env:NEXT_PUBLIC_APP_URL="https://app.upgradeplatform.kz"
#   bash:        export NEXT_PUBLIC_APP_URL=https://app.upgradeplatform.kz
# Пока не задан — кнопка ведёт на якорь-заглушку.

npm ci                    # первый раз
npm run build:static      # → папка out/ (≈3 МБ)
```

Затем **содержимое** `out/` (не саму папку) залить в корневую папку сайта на хостинге,
вместе со скрытым `.htaccess`. Файл `index.html` перезапишет заглушку хостинга,
`cgi-bin` не трогать.

- **Через Plesk:** «Файлы» → `upgradeplatform.kz` → «Загрузить» → ZIP с содержимым `out/`
  → «Извлечь файлы».
- **Через FTP** (FileZilla/WinSCP): данные — Plesk → «FTP» / «Информация о подключении».

### Проверка после заливки

- `https://upgradeplatform.kz` → перекидывает на `/ru/`, страница открывается целиком;
- отправить тестовую заявку с формы → письмо приходит на `LEAD_TO`
  (если нет — Plesk → «Журналы»; письма с нового домена без SPF/DKIM могут попадать в спам);
- `https://upgradeplatform.kz/nope` → своя 404.

### Что учесть

- Статика = нет серверной логики Next: `src/app/api/lead` и `src/proxy.ts`
  в этой сборке не участвуют (Next сам пишет про это предупреждение при сборке).
- Плейсхолдеры в контенте, которые надо заменить на реальные до запуска:
  `footer.email` / `footer.phone` в `messages/ru.json`.
- Приложение (FastAPI + PostgreSQL) на такой хостинг не встанет — ему нужен VPS
  (`app.` / `api.` поддомены), это отдельный этап.

---

## B. VPS + Docker (Node-сервер)

Сайт + Caddy как reverse-proxy с автоматическим HTTPS.

```bash
curl -fsSL https://get.docker.com | sh
git clone https://github.com/YerkebulanP/bshu-landing.git && cd bshu-landing
cp .env.example .env && nano .env      # SITE_DOMAIN, NEXT_PUBLIC_APP_URL
docker compose up -d --build
```

DNS: `A`-записи `upgradeplatform.kz` и `www` → IP VPS, порты 80/443 открыты.
Обновление: `git pull && docker compose up -d --build`.
`NEXT_PUBLIC_*` инлайнятся в сборку — после смены значения нужен пересбор.
Заявки в этом режиме принимает Next-роут `/api/lead` (сейчас заглушка с `console.log`).
