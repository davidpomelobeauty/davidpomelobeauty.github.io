/** @type {import('@sveltejs/kit').Config} */

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html', // SPA 라우팅을 위한 폴백 지정
      precompress: false,
      strict: true,
    }),
    router: {
      type: 'hash',
    },
  },
};
