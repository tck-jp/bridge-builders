// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  adapter: vercel(),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});