import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || "https://pquesadaallerh.github.io/axe_bow_fund/",
  base: "/axe_bow_fund/",
  integrations: [sitemap()],
});
