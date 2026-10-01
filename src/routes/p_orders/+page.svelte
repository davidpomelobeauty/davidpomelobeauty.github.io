<script lang="ts">
  import { toaster } from '$lib/toaster';

  let text = $state('');

  function arrayToCsv(data: string[][]): string {
    return data.map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');
  }

  function downloadCsv(data: string[][], filename: string = 'data.csv') {
    const csvContent = arrayToCsv(data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function handlePaste(event: ClipboardEvent) {
    event.preventDefault();

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
      // 수량 문자, 짝대기 (|), ea 글자, 개별 총 금액 제거
      .replace(/.*Qty\: (\d+) \| \$(\d+\.\d{2}) ea\n\$\d+\.\d{2}/gm, '$1\n$2');

    console.log(JSON.stringify(result));
    text = result;
    const titles = [['SKU', 'Barcode', 'Supplier SKU', 'Quantity', 'Cost', 'Tax']];
    const items = result
      .split(/\n1\nBuy It Again\n/)
      .filter(Boolean)
      .map((value, index) => {
        const array = [`p_o_slot_${index + 1}`, '', ''];
        return array.concat(value.trim().split(/\n/).slice(-2));
      });
    console.log(items);

    const data = titles.concat(items);
    // downloadCsv(data);
  }
</script>

<div class="flex sp-4">
  <textarea
    class="textarea w-full h-[90vh]"
    onpaste={handlePaste}
    bind:value={text}
  ></textarea>
</div>
