// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: đổi sang URL Vercel thật sau khi deploy (vd: https://ky-nguyen.vercel.app).
// Đây là chỗ DUY NHẤT cần sửa — canonical, sitemap, robots.txt và JSON-LD đều đọc từ đây.
const SITE_URL = 'https://ky-nguyen.vercel.app';

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
