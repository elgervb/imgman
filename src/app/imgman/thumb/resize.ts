import { createCanvas } from '../create/canvas';

// tslint:disable-next-line:max-line-length
export function resize(canvas: HTMLCanvasElement, maxHeight: number, maxWidth: number, ratioBy: 'width' | 'height' = 'width'): HTMLCanvasElement {

  const ratio = canvas.height / canvas.width;
  const width = ratioBy === 'width' ? maxWidth : maxWidth * ratio;
  const height = ratioBy === 'height' ? maxHeight : maxHeight * ratio;

  const copy = createCanvas();
  copy.height = height;
  copy.width = width;

  const ctx = copy.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  // @ts-ignore
  ctx.mozImageSmoothingEnabled = true;
  // @ts-ignore
  ctx.webkitImageSmoothingEnabled = true;
  // @ts-ignore
  ctx.msImageSmoothingEnabled = true;

  ctx.drawImage(canvas,
    0, 0,                        // source x y
    canvas.width, canvas.height, // source w h
    0, 0,                        // dest x y
    width, height                // dest w h
  );

  return copy;
}
