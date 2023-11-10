import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";
import sitemap from "./scripts/sitemap.gen"

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), sitemap()],
  site: "https://souta-lab.net"
});
