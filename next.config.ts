import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
  // Компактный self-contained билд для Docker/VPS (ps.kz): всё нужное
  // для рантайма кладётся в .next/standalone, образ не тянет node_modules.
  output: "standalone",
  // Корень трейсинга файлов — сама папка проекта (иначе Next может уехать
  // на родительский package-lock.json и разложить standalone по вложенному пути).
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  allowedDevOrigins: ["26.236.64.6"],
};

export default withNextIntl(nextConfig);
