<script lang="ts">
import { extract } from './extractor.ts';
import { toaster } from '#lib';

let content = $state();

async function getText(): Promise<string | null> {
  try {
    // 사용자에게 권한 동의 팝업을 띄우고, 승인되면 클립보드 텍스트를 바로 변수에 할당
    const htmlText: string = await navigator.clipboard.readText();
    extract(htmlText);
    return htmlText;
  } catch (error) {
    console.error('No Clipboard: ', error);
    return null;
  }
}
/*
function handlePaste(event: ClipboardEvent) {
  event.preventDefault();
  const htmlData = event.clipboardData?.getData('text/html') || null;
  extract(htmlData);
}
*/
</script>

<!-- class="textarea w-full h-[90vh] resize-none overflow-y-auto block p-4" -->
<!--
<div class="flex sp-4">
  <div
    class="textarea w-20 h-12 resize-none overflow-y-auto block p-4"
    contenteditable="true"
    onpaste={handlePaste}
  >{content}</div>
</div>
-->
<div
  class="w-full h-[90vh] p-4">
  <button
    type="button"
    class="btn w-full h-full preset-filled-success-900-100"
    onclick={getText}>
  Click me!
  </button>
</div>
