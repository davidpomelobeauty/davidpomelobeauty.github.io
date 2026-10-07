import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: [vitePreprocess()],
      adapter: adapter({
        fallback: 'index.html',
      }),
      router: {
        type: 'hash',
      },
    }),
    tailwindcss(),
  ],
  server: {
    watch: {
      // ⚡ 무거운 캐시 및 노드 폴더를 감시 대상에서 완전히 제외합니다.
      ignored: ['**/node_modules/**', '**/.deno/**', '**/.svelte-kit/**'],
    },
  },
});
