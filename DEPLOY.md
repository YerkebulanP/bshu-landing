# Деплой лендинга на ps.kz VPS

Лендинг — это Next.js с сервером (не статика), поэтому нужен **VPS / облачный
сервер**, а не виртуальный хостинг. Всё упаковано в Docker: сам сайт +
Caddy как reverse-proxy с автоматическим HTTPS.

## 1. Сервер

- ps.kz → «Облачные VPS» → Ubuntu 24.04 LTS, минимально 1 vCPU / 1–2 ГБ RAM.
- Зайти по SSH, поставить Docker:
  ```bash
  curl -fsSL https://get.docker.com | sh
  ```
  (плагин `docker compose` входит в комплект).

## 2. DNS

В панели управления доменом на ps.kz:

| Запись | Тип | Значение |
|--------|-----|----------|
| `upgradeplatform.kz` | `A` | IP вашего VPS |
| `www` | `A` | IP вашего VPS |

Если домен ещё на nameserver'ах Vercel — переключить NS на ps.kz (или на любые,
где сможете править записи). Дождаться распространения (обычно до 1–2 часов,
у `.kz` бывает дольше).

## 3. Код и переменные

```bash
git clone https://github.com/YerkebulanP/bshu-landing.git
cd bshu-landing
cp .env.example .env
nano .env
```

В `.env`:
```
NEXT_PUBLIC_APP_URL=https://app.upgradeplatform.kz   # адрес приложения; можно оставить пустым, пока аппа нет
SITE_DOMAIN=upgradeplatform.kz
```
`NEXT_PUBLIC_APP_URL` инлайнится в сборку — после его изменения нужен пересбор
(шаг 5).

## 4. Запуск

```bash
docker compose up -d --build
```

Caddy сам получит сертификат Let's Encrypt для `upgradeplatform.kz` и `www.`
(порты 80/443 на VPS должны быть открыты — на ps.kz проверить firewall/security
group). Проверка:
```bash
docker compose ps
docker compose logs -f caddy   # тут видно выдачу сертификата
curl -I https://upgradeplatform.kz
```

## 5. Обновление после изменений в репозитории

```bash
git pull
docker compose up -d --build
```

Старый контейнер меняется на новый без простоя доступа (Caddy держит соединение).
Почистить старые образы: `docker image prune -f`.

## 6. Полезное

- Логи сайта: `docker compose logs -f web`
- Перезапуск: `docker compose restart web`
- Остановить всё: `docker compose down` (сертификаты сохранятся в volume `caddy_data`)
- Автозапуск после ребута сервера обеспечен `restart: unless-stopped`.

## Что ещё не готово (сторона приложения)

`app.upgradeplatform.kz` (React SPA) и `api.upgradeplatform.kz`
(FastAPI + PostgreSQL) — отдельная обвязка, готовится позже. Пока
`NEXT_PUBLIC_APP_URL` можно оставить пустым: кнопка «Вход для участников»
будет вести на якорь-заглушку, лендинг от этого не ломается.
