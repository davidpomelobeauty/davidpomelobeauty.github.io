<script lang="ts">
  import { toaster } from '#lib';

  let contents = $state('');

  function handlePaste(event: ClipboardEvent) {
    event.preventDefault();

    const original = event?.clipboardData?.getData('text') ?? '';
    const withNewLine = original.replace(/\r+/g, '').replace(/[^\S\n]+/, ' ');
    const [, text = ''] = withNewLine.match(/Deals\n(.*?)Contact Us/s) || [];
    contents = text;

    /* Title; */
    const [, brandName = '', productName = ''] = text.match(/^(.*)\n(.*)\nSKU#/m) || [];
    const title = brandName.substring(brandName.indexOf('by ') + 3) + (brandName ? ' ' : '') + productName;
    console.log(JSON.stringify(title));

    /* Price */
    const [, priceBlock = ''] = text.match(/Write a review\n(.*?)\nSearch by SKU or Name/s) || [];
    const prices = [...priceBlock.matchAll(/\$(\d+\.\d+)/g)].map((match) => +match[1]) || [];
    const price = Math.max(0, ...prices).toFixed(2);
    console.log(JSON.stringify(price));

    /* Detail */
    const [, detail = ''] = text.match(/Detailscollapse\n(.*?)\nDirectionsexpand/s) || [];
    // console.log(JSON.stringify(detail));

    /* Variants */
  }
</script>

<div class="flex sp-4">
  <textarea
    class="textarea w-full h-[90vh]"
    onpaste={handlePaste}
    bind:value={contents}
  ></textarea>
</div>
