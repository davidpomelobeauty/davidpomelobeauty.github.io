<script lang="ts">
import { extract } from './extractor.ts';
import { toaster } from '#lib';

let content = $state();

async function fetchHtmlFromClipboard() {
  try {
    // 1. 최신 브라우저의 클립보드 데이터 전역 읽기 기능을 실행합니다.
    const items = await navigator.clipboard.read();

    for (const item of items) {
      // 2. 클립보드 내용물 중 'text/html' 형식이 존재하는지 확인합니다.
      if (item.types.includes('text/html')) {
        const blob = await item.getType('text/html');
        const htmlString = await blob.text(); // 순수 HTML 태그 소스 확보

        // 3. 문자열을 실제 HTML 가상 DOM 구조로 파싱합니다.
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        // 4. 내가 만든 입력창(div)에 img 태그가 온전히 살아있는 HTML 트리를 그대로 주입합니다.
        console.dir(doc);
        console.log('🎯 클립보드 내부의 실제 HTML 태그 구조 주입 완료');
        return;
      }
    }
    alert('클립보드에 복사된 HTML 태그 구조가 없습니다. (일반 텍스트 제외됨)');
  } catch (err) {
    console.error('보안 거부 또는 권한 없음:', err);
    alert('클립보드 접근 권한을 허용해 주셔야 HTML 구조를 가져올 수 있습니다.');
  }
}

function handlePaste(event: ClipboardEvent) {
  event.preventDefault();
  const htmlData = event.clipboardData?.getData('text/html') || null;
  extract(htmlData);
}
</script>

<!-- class="textarea w-full h-[90vh] resize-none overflow-y-auto block p-4" -->
<div class="flex sp-4">
  <div
    class="textarea w-20 h-12 resize-none overflow-y-auto block p-4"
    contenteditable="true"
    onpaste={handlePaste}
  >{content}</div>
</div>

<button onclick={fetchHtmlFromClipboard}>test</button>
