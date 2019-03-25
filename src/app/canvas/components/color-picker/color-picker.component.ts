import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { filter, map, startWith, takeUntil } from 'rxjs/operators';
import { average } from 'src/app/imgman/color/average';
import { colorPicker } from 'src/app/imgman/color/color-picker';
import { rgbToString } from 'src/app/imgman/color/rgb-to-string';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() canvas: HTMLCanvasElement;
  @Input() secondaryCanvas: HTMLCanvasElement;

  color$: Observable<string>;
  active$ = new BehaviorSubject<boolean>(false);

  private destroyed$ = new Subject();

  @HostListener('document:keydown.escape')
  cancelActive() {
    this.toggleActive(false);
  }

  ngOnInit() {

    merge(
      fromEvent(this.canvas, 'click'),
      fromEvent(this.secondaryCanvas, 'click')
    ).pipe(
      filter(() => this.active$.value),
      takeUntil(this.destroyed$)
    ).subscribe(() => this.toggleActive());

    this.color$ = merge(
      fromEvent<MouseEvent>(this.canvas, 'mousemove'),
      fromEvent<MouseEvent>(this.secondaryCanvas, 'mousemove')
    ).pipe(
      filter(() => this.active$.value),
      map(event => colorPicker(event.target as HTMLCanvasElement, event.layerX, event.layerY)),
      startWith(average(this.canvas)),
      map(rgbToString),
      takeUntil(this.destroyed$)
    );
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  toggleActive(force?: boolean) {
    this.active$.next(force ? force : !this.active$.getValue());
  }

}
