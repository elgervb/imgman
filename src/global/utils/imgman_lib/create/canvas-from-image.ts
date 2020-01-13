import { createCanvas } from './canvas';
import { copyImageOnCanvas } from './copy-image-on-canvas';

export function createCanvasFromImage(img: HTMLImageElement): HTMLCanvasElement {
  const canvas = createCanvas();
  canvas.height = img.naturalHeight || img.offsetHeight || img.height;
  canvas.width = img.naturalWidth || img.offsetWidth || img.width;

  return copyImageOnCanvas(canvas, img);
};
