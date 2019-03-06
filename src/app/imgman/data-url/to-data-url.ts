import { MimeType } from '../mimetype';

export function toDataUrl(base64: string, mimeType: MimeType) {
  return `data:${mimeType};base64,${base64}`;
}
