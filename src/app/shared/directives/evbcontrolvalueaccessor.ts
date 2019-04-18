import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Poses as a bridge between all @elgervb/stencil-components and Angular.
 *
 * Usage:
 * ```
 * <evb-formcontrol>
 *   <label for="form-control">form control</label>
 *   <evb-range evbControl min="1" max="50" step="1" value="4" formControlName="formControl"></evb-range>
 * </evb-formcontrol>
 * ```
 */
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

  registerOnTouched(fn: (value: string) => void) {
    this.onBlur = value => { fn(value); };
  }
}
