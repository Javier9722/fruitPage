import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://javier9722.github.io",
  base: "/fruitPage",
  integrations: [
    tailwind({
      config: { applyBaseStyles: true },
    }),
  ],
});
