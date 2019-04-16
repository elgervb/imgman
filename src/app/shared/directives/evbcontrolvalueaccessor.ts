import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[evbControl]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: EvbValueAccessorDirective,
    multi: true
  }]
})
export class EvbValueAccessorDirective implements ControlValueAccessor {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.onBlur = () => { };
    this.onChange = () => { };
  }

  onBlur: (value: string) => void;
  onChange: (value: string) => void;

  writeValue(value: string) {
    this.renderer.setProperty(this.element.nativeElement, 'value', value);
  }

  @HostListener('evbChange', ['$event.detail'])
  handleEvbChange(value: string) {
    this.onChange(value);
  }

  @HostListener('evbBlur', ['$event.detail'])
  handleEvbBlur(value: string) {
    this.onBlur(value);
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = value => {
      fn(value);
    };
  }

  registerOnTouched() { }
}
