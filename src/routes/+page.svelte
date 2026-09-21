<script lang="ts">
  let text = $state('');

  function handlePaste(event: ClipboardEvent) {
    const pastedText = event.clipboardData ? event.clipboardData.getData('text').replace(/\s+/g, ' ') : '';
    const startReg = /Shipping\s+Details[\s\S]*?Burlington,\s+WA\s+98233-3204/;
    const endReg = /Need\s+Help\?/;

    alert(pastedText.match(startReg));
    alert(pastedText.match(endReg));

    const regex = new RegExp(`${startReg.source}(.*?)${endReg.source}`, 's');
    const match = pastedText.match(regex);
    const result = match ? match[1] : '';

    alert(result);
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

<main class="p-8 flex flex-col items-center justify-center min-h-[50vh] gap-4">
  <h1 class="text-3xl font-black text-primary-500">Skeleton UI v5 버튼 컴포넌트</h1>

  <!--  HTML 순정 버튼에 .btn 클래스를 입혀서 구현합니다 -->
  <!-- 프리셋 스타일은 v4 기반 유틸리티나 제공되는 변형 클래스를 활용합니다 -->
  <button
    class="btn bg-primary-500 text-white font-bold px-4 py-2 rounded-token hover:bg-primary-600 transition-colors"
    onclick={() => alert('Deno 2.x SPA 동작 성공!')}
  >
    동작 검증 버튼
  </button>
</main>

<style>
  .full-textarea {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box; /* 패딩과 테두리가 크기에 포함되도록 설정 */
    resize: none; /* 사용자가 임의로 크기 조절하지 못하도록 설정 */
  }
</style>
