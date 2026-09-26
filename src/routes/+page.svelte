<script lang="ts">
  import { toaster } from '$lib/toaster';

  let text = $state('');

  function handlePaste(event: ClipboardEvent) {
    const original = event.clipboardData ? event.clipboardData.getData('text') : '';
    const singleSpace = original.replace(/\s+/g, ' ');
    const withNewLine = original.replace(/[^\S\r\n]+/g, ' ');
    const startReg = /Shipping Details[\s\S]*?98233-3204/;
    const endReg = /Need Help\?\r?\n/;

    toaster.info({ description: withNewLine.match(startReg), duration: 10000 });
    toaster.info({ description: withNewLine.match(endReg), duration: 10000 });

    const regex = new RegExp(`${startReg.source}(.*?)${endReg.source}`, 's');
    const match = withNewLine.match(regex);
    const result = match ? match[1] : '';

    text = result;
    event.preventDefault();
  }
</script>

<div class="flex sp-4">
  <textarea
    class="textarea w-full h-[90vh]"
    onpaste={handlePaste}
    bind:value={text}
  ></textarea>
</div>
