
export function copyImageOnCanvas(canvas: HTMLCanvasElement, img: HTMLImageElement): HTMLCanvasElement {
  const context = canvas.getContext('2d');
  const height = img.naturalHeight || img.offsetHeight || img.height;
  const width = img.naturalWidth || img.offsetWidth || img.width;

  const dx = width > canvas.width ? 0 : (canvas.width - width) / 2;
  const dy = height > canvas.height ? 0 : (canvas.height - height) / 2;

  // put the image on the canvas
  context.drawImage(img, 0, 0, width, height, dx, dy, width, height);

  return canvas;
}
