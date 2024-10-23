// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  integrations: [tailwind(), solidJs({ devtools: true })],
});
