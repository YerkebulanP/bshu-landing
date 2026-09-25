// Сборка статики для обычного хостинга (Plesk/Apache/PHP): результат — папка out/.
// Кроссплатформенно (Windows/macOS/Linux), без cross-env.
import { spawnSync } from "node:child_process";

const env = {
  ...process.env,
  STATIC_EXPORT: "1",
  // В статике нет Next-роута /api/lead — заявки принимает public/lead.php.
  NEXT_PUBLIC_LEAD_ENDPOINT: process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "/lead.php",
};

const { status } = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  shell: true,
  env,
});

process.exit(status ?? 1);
