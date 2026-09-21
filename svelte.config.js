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
    paths: {
      // Deno 환경에서도 안전하게 작동하는 Vite 기본 인수나
      // GitHub Actions가 주입해주는 환경변수(GITHUB_ACTIONS)를 활용하는 방법입니다.
      base: process.env.GITHUB_ACTIONS ? '/davidpomelobeauty.github.io' : '',
    },
  },
};
