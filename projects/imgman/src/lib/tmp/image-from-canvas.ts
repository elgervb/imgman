import { MimeType } from './mimetype';

export function imageFromCanvas(canvas: HTMLCanvasElement, mime = MimeType.PNG): HTMLImageElement {
  const image = new Image();
  image.src = canvas.toDataURL(mime);

  return image;
}