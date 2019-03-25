import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { createImage } from 'src/app/imgman/create/image';

@Component({
  selector: 'app-canvas-image',
  templateUrl: './canvas-image.component.html',
  styleUrls: ['./canvas-image.component.css']
})
export class CanvasImageComponent implements OnInit {

  @Input() image: string;
  @Input() max: number;
  @Output() readonly ready = new EventEmitter<HTMLCanvasElement>();

  @ViewChild('canvas') canvasEl: ElementRef<HTMLCanvasElement>;

  canvasReady$: Observable<boolean>;

  constructor() { }

  ngOnInit() {
    const canvas = this.canvasEl.nativeElement;

    this.canvasReady$ = fromEvent(createImage(this.image), 'load')
      .pipe(
        take(1),
        map(evt => evt.target as HTMLImageElement),
        tap(img => this.copyImageOnCanvas(canvas, img)),
        tap(() => this.ready.emit(canvas)),
        map(() => true)
      );
  }

  private copyImageOnCanvas(canvas: HTMLCanvasElement, img: HTMLImageElement) {
    const context = canvas.getContext('2d');
    const height = img.naturalHeight || img.offsetHeight || img.height;
    const width = img.naturalWidth || img.offsetWidth || img.width;

    canvas.height = this.max || height;
    canvas.width = this.max || width;

    context.drawImage(img, 0, 0, width, height, 0, 0, canvas.width, canvas.height);

    return canvas;
  }

}
