import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Два режима сборки:
//  • STATIC_EXPORT=1 → чистая статика в out/ для обычного (Plesk/Apache/PHP)
//    хостинга без Node — `npm run build:static`;
//  • по умолчанию → standalone Node-сервер для Docker/VPS.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  // Корень трейсинга файлов — сама папка проекта (иначе Next может уехать
  // на родительский package-lock.json и разложить standalone по вложенному пути).
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  ...(isStaticExport && {
    // /ru/ → ru/index.html: работает на любом веб-сервере без rewrite-правил.
    trailingSlash: true,
    // Оптимизатор изображений Next требует сервер — в статике его нет.
    images: { unoptimized: true },
  }),
  allowedDevOrigins: ["26.236.64.6"],
};

export default withNextIntl(nextConfig);
