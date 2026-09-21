<script lang="ts">
  let text = $state('');

  function handlePaste(event: ClipboardEvent) {
    const pastedText = event.clipboardData
      ? event.clipboardData.getData('text').replace(/\s+/g, ' ')
      : '';
    const startReg = /Shipping\s+Details[\s\S]*?Burlington,\s+WA\s+98233-3204/;
    const endReg = /Need\s+Help\?/;

    alert(pastedText.match(startReg));
    alert(pastedText.match(endReg));

    const regex = new RegExp(`${startReg.source}(.*?)${endReg.source}`, 's');
    const match = pastedText.match(regex);
    const result = match ? match[1] : '';

    alert(result);
    text = result;
    event.preventDefault();
  }
</script>

<h1>Home</h1>

<textarea class="full-textarea" onpaste={handlePaste}>{text}</textarea>

<style>
  .full-textarea {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box; /* 패딩과 테두리가 크기에 포함되도록 설정 */
    resize: none; /* 사용자가 임의로 크기 조절하지 못하도록 설정 */
  }
</style>
