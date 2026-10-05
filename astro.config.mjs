// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// URL thật của site trên Vercel. Khi có tên miền riêng, đổi ở đây.
// Đây là chỗ DUY NHẤT cần sửa — canonical, sitemap, robots.txt và JSON-LD đều đọc từ đây.
const SITE_URL = 'https://ky-nguyen-website.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Internal links are slashless (/about), so canonical + sitemap match them.
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
