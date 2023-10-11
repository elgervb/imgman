import { createCanvas } from "./create-canvas";

export function canvasFromImage(img: HTMLImageElement, filter?: string): HTMLCanvasElement {
    const canvas = createCanvas();
    const context = canvas.getContext('2d')!;
    canvas.height = img.naturalHeight || img.offsetHeight || img.height;
    canvas.width = img.naturalWidth || img.offsetWidth || img.width;

    if (filter) {
      context.filter = filter;
    }
  
    context.drawImage(img, 0, 0);
  
    return canvas;
  }