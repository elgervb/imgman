import { Rgb } from './rgb';

export function toRgb(r: number, g: number, b: number, a?: number): Rgb {
  return { r, g, b, a };
}
