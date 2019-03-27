import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { filter, map, startWith, takeUntil, tap } from 'rxjs/operators';
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

  constructor() { }

  @Input() canvas: HTMLCanvasElement;
  @Input() secondaryCanvas: HTMLCanvasElement;

  @Output() readonly picked = new EventEmitter<Rgb>();

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
      tap(color => this.picked.emit(color)),
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
