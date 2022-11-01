import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3101
  },
  vite: {
    server: {
      fs: {
        allow: ['./']
      }
    }
  },
  integrations: [react()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  base: '/astro/'
});