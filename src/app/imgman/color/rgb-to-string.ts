import { Rgb } from './rgb';

export function rgbToString(rgb: Rgb) {
  // tslint:disable-next-line:no-magic-numbers
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
}
