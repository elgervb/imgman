import { Pipe, PipeTransform } from '@angular/core';
import { Rgb } from 'src/app/imgman/color/rgb';
import { rgbToString } from 'src/app/imgman/color/rgb-to-string';

@Pipe({
  name: 'rgbToString'
})
export class RgbToStringPipe implements PipeTransform {

  transform(value: Rgb): string {
    if (!value) {
      return '';
    }

    return rgbToString(value);
  }

}
