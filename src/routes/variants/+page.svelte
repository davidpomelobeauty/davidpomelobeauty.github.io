<script lang="ts">
import { toaster, } from '#lib';

// let contents = $state('');

function handlePaste(event: ClipboardEvent,) {
  event.preventDefault();

  // 2. 클립보드에서 'text/html' 데이터 가져오기 (타 사이트의 원본 태그 구조)
  let htmlData = event.clipboardData?.getData('text/html',) || '';

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return;
  }

  // 드래그 내용 삭제
  selection.deleteFromDocument();

  const range = selection.getRangeAt(0,);
  const fragment = range.createContextualFragment(htmlData,);

  range.insertNode(fragment,);

  // 5. 붙여넣은 후 커서를 삽입된 내용의 맨 뒤로 이동
  selection.collapseToEnd();
}
</script>

<!-- class="textarea w-full h-[90vh] resize-none overflow-y-auto block p-4" -->
<div class="flex sp-4">
  <div
    contenteditable="true"
    class="textarea w-20 h-12 resize-none overflow-y-auto block p-4"
    onpaste={handlePaste}
  ></div>
</div>
