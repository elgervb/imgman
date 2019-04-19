import { Pipe, PipeTransform } from '@angular/core';
import { isDark } from 'src/app/imgman/color/is-dark';
import { Rgb } from 'src/app/imgman/color/rgb';

@Pipe({
  name: 'appIsDark'
})
export class IsDarkPipe implements PipeTransform {

  transform(color: Rgb): boolean {
    if (!color) {
      return false;
    }

    return isDark(color);
  }

}
