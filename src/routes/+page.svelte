<script lang="ts">
import DOMPurify from 'dompurify';
import { parse } from 'node-html-parser';
import { toaster } from '#lib';

let content = $state('');
function handlePaste(event: ClipboardEvent) {
  event.preventDefault();

  // 클립보드에서 'text/html' 데이터 가져오기 (타 사이트의 원본 태그 구조)
  let htmlData = event.clipboardData?.getData('text/html') || '';

  if (!htmlData) {
    return;
  }

  const sanitizedResult = DOMPurify.sanitize(htmlData, {
    FORBID_ATTR: ['style'],
    FORBID_TAGS: ['style', 'svg', 'iframe', 'video', 'audio', 'noscript', 'meta'],
    SAFE_FOR_TEMPLATES: false,
  });

  const targetNode = parse(sanitizedResult).querySelector('.product-detail-container');

  if (!targetNode) {
    return;
  }

  console.dir(targetNode);
}
</script>

<!-- class="textarea w-20 h-12 resize-none overflow-y-auto block p-4" -->
<div class="flex sp-4">
  <div
    class="textarea w-full h-[90vh] resize-none overflow-y-auto block p-4"
    contenteditable="true"
    onpaste={handlePaste}
  >{content}</div>
</div>
