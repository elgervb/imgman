import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
import { filter, map, startWith, takeUntil } from 'rxjs/operators';
import { average } from 'src/app/imgman/color/average';
import { colorPicker } from 'src/app/imgman/color/color-picker';
import { Rgb } from 'src/app/imgman/color/rgb';
import { rgbToString } from 'src/app/imgman/color/rgb-to-string';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit, OnDestroy {

  @Input() canvas: HTMLCanvasElement;

  color$: Observable<string>;
  active$ = new BehaviorSubject<boolean>(false);

  private destroyed$ = new Subject();

  constructor() { }

  ngOnInit() {

    fromEvent(this.canvas, 'click')
      .pipe(
        filter(() => this.active$.value),
        takeUntil(this.destroyed$)
      ).subscribe(() => this.toggleActive());

    this.color$ = fromEvent(this.canvas, 'mousemove')
      .pipe(
        filter(() => this.active$.value),
        map<MouseEvent, Rgb>(event => colorPicker(this.canvas, event.layerX, event.layerY)),
        startWith(average(this.canvas)),
        map(rgbToString),
        takeUntil(this.destroyed$)
      );
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  toggleActive() {
    this.active$.next(!this.active$.getValue());
  }

}
