import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';

@Pipe({
  name: 'appSanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, arg?: 'style' | 'html' | 'url' | 'resource'): SafeValue {

    switch (arg) {
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resource':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Cannot sanitize value for ${arg}`);
    }
  }

}
