<script lang="ts">
  import { toaster } from '$lib/toaster';

  let text = $state('');

  function handlePaste(event: ClipboardEvent) {
    const original = event.clipboardData ? event.clipboardData.getData('text') : '';
    const withNewLine = original.replace(/[^\S\n]+/g, ' ');
    const startReg = /Shipping Details[\s\S]*?98233-3204/;
    const endReg = /Need Help\?/;
    const regex = new RegExp(`${startReg.source}(.*?)${endReg.source}`, 's');
    const match = withNewLine.match(regex);
    const matched = match ? match[1] : '';
    const result = matched
      .replace(/^\s*$\n/gm, '') // 빈 줄 제거
      .replace(/ +$/gm, '') // Trailing space 제거
      .replace('Qty: ', '') // 수량 문자만 제거
      .replace(/ \|.?/gm, '\n'); // 개별 총 금액 제거

    console.log(JSON.stringify(result));
    // toaster.info({ description: witshNewLine.match(startReg), duration: 10000 });
    // toaster.info({ description: withNewLine.match(endReg), duration: 10000 });

    text = result;
    event.preventDefault();
    const items = result
      .split(/\nBuy It Again\n/)
      .filter(Boolean)
      .map((value) => {
        const arr = value.trim().split(/\n/);
        const item = {};
        switch (arr.length) {
          case 7:
            break;
          case 8:
            break;
          case 9:
            break;
        }
        return arr;
      });
    console.log(items);

    const singleSpace = original.replace(/\s+/g, ' ');
    const startReg2 = /Shipping Details[\s\S]*?98233-3204/;
    const endReg2 = /Need Help\?/;
    const regex2 = new RegExp(`${startReg2.source}\\s(.*?)\\s${endReg2.source}`, 's');
    const match2 = singleSpace.match(regex2);
    const result2 = match2 ? match2[1] : '';
  }
</script>

<div class="flex sp-4">
  <textarea
    class="textarea w-full h-[90vh]"
    onpaste={handlePaste}
    bind:value={text}
  ></textarea>
</div>
