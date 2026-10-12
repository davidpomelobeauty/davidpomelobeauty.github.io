import DOMPurify from 'dompurify';
import { parse } from 'node-html-parser';

export function extract(htmlData: string | null): void {
  const result = {};
  if (!htmlData) {
    return;
  }

  const sanitized = DOMPurify.sanitize(htmlData, {
    FORBID_ATTR: ['style'],
    FORBID_TAGS: ['style', 'svg', 'iframe', 'video', 'audio', 'noscript', 'meta'],
    SAFE_FOR_TEMPLATES: false,
  });

  const container = parse(sanitized).querySelector('.product-detail-container');
  if (!container) {
    return;
  }

  const imageCarouselContainer = container.querySelector('.image-carousel-container');
  if (!imageCarouselContainer) {
    return;
  }

  const image = imageCarouselContainer.querySelector('.zoomImage img');
  console.dir(image);

  const productInfo = container.querySelector('.product-info');
  if (!productInfo) {
    return;
  }

  // console.dir(container);

  return;
  /*
  if (!targetNode) {
    return parse('<div>empty</div>');
  }
 */
}
