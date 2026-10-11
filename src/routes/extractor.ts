import DOMPurify from 'dompurify';
import { parse } from 'node-html-parser';

export function extract(htmlData: string): void {
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
