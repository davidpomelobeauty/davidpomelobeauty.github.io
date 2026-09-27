<script lang="ts">
  import Item from '$lib/services/item';
  import { toaster } from '$lib/toaster';

  let text = $state('');

  function handlePaste(event: ClipboardEvent) {
    const original = event.clipboardData ? event.clipboardData.getData('text') : '';
    // const singleSpace = original.replace(/\s+/g, ' ');
    const withNewLine = original.replace(/[^\S\r\n]+/g, ' ');
    const startReg = /Shipping Details[\s\S]*?98233-3204\r?\n/;
    const endReg = /\r?\nNeed Help\?/;

    // toaster.info({ description: withNewLine.match(startReg), duration: 10000 });
    // toaster.info({ description: withNewLine.match(endReg), duration: 10000 });

    const regex = new RegExp(`${startReg.source}(.*?)${endReg.source}`, 's');
    const match = withNewLine.match(regex);
    const result = match ? match[1].replace(/^$\r?\n/gm, '') : '';

    text = result;
    event.preventDefault();

    const items = result.split('Buy It Again'); //.map((value, index) => {});
    toaster.info({
      description: result,
      duration: 10000,
      meta: {
        customClass: 'whitespace-pre-line',
      },
    });
    // toaster.info({ description: items[0].match(/\r?\n/gm), duration: 10000 });
    // toaster.info({ description: items[0].split(/\r?\n/).join(' / '), duration: 10000 });
    // toaster.info({ description: items, duration: 10000 });
  }
</script>

<div class="flex sp-4">
  <textarea
    class="textarea w-full h-[90vh]"
    onpaste={handlePaste}
    bind:value={text}
  ></textarea>
</div>
