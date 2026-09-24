<script lang="ts">
  import { toaster } from '$lib/toaster';

  let text = $state('');

  function handlePaste(event: ClipboardEvent) {
    const original = event.clipboardData ? event.clipboardData.getData('text') : '';
    const singleSpace = original.replace(/\s+/g, ' ');
    const withNewLine = original.replace(/[^\S\r\n]+/g, ' ');
    const startReg = /Shipping\s+Details[\s\S]*?Burlington,\s+WA\s+98233-3204/;
    const endReg = /Need\s+Help\?/;

    toaster.info({ description: singleSpace.match(startReg), duration: 10000 });
    toaster.info({ description: singleSpace.match(endReg), duration: 10000 });

    const regex = new RegExp(/98233-3204(.*?)Need\s+Help\?/, 's');
    // const regex = new RegExp(`${startReg.source}(.*?)${endReg.source}`, 's');
    const match = withNewLine.match(regex);
    const result = match ? match[1] : '';

    text = result;
    event.preventDefault();
  }
</script>

<h1>Home</h1>

<textarea
  class="full-textarea"
  onpaste={handlePaste}
  bind:value={text}
></textarea>

<!--
<main class="p-8 flex flex-col items-center justify-center min-h-[50vh] gap-4">
  <h1 class="text-3xl font-black text-primary-500">Skeleton UI v5 버튼 컴포넌트</h1>

  <button
    class="btn bg-primary-500 text-white font-bold px-4 py-2 rounded-token hover:bg-primary-600 transition-colors"
    onclick={() => alert('Deno 2.x SPA 동작 성공!')}
  >
    동작 검증 버튼
  </button>
</main>
-->

<style>
  .full-textarea {
    width: 95vw;
    height: 90vh;
    box-sizing: border-box; /* 패딩과 테두리가 크기에 포함되도록 설정 */
    resize: none; /* 사용자가 임의로 크기 조절하지 못하도록 설정 */
  }
</style>
