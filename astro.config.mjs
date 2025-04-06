// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    prefetch()
  ],
  
  // View Transitions are now a built-in feature in newer Astro versions
  // No need for experimental flag
  
  vite: {
    build: {
      minify: 'terser'
    },
    optimizeDeps: {
      include: ['tailwindcss']
    }
  }
});