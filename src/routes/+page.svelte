<script lang="ts">
import DOMPurify from 'dompurify';
import { parse } from 'node-html-parser';
import { extract } from './extractor.ts';
import { toaster } from '#lib';

let content = $state('');

function handlePaste(event: ClipboardEvent) {
  event.preventDefault();
  const htmlData = event.clipboardData?.getData('text/html') || '';
  extract(htmlData);
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
