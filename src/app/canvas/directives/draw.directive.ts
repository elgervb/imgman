import {
  AfterContentInit, ContentChild, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges
} from '@angular/core';
import { Brush, brushFactory } from 'src/app/imgman/drawing/brushes';
import { BrushContext, BrushType } from 'src/app/imgman/drawing/models';
import { getMousePosition } from 'src/app/imgman/drawing/utils';

@Directive({
  selector: '[appDraw]'
})
export class DrawDirective implements OnInit, OnChanges, AfterContentInit {

  @Input() canvas?: HTMLCanvasElement;
  @Input() lineWidth = 4;
  @Input() color = '#000';
  /**
   * A number between 0.0 (fully transparent) and 1.0 (fully opaque)
   */
  @Input() globalAlpha: number;
  @Input() brushType: BrushType = BrushType.pen;

  // fallback for nested canvasses...
  @ContentChild('canvas') contentCanvas: ElementRef<HTMLCanvasElement>;

  private brush: Brush;

  private isDrawing = false;
  private ctx: CanvasRenderingContext2D;

  constructor(private element: ElementRef<HTMLCanvasElement>) { }

  ngOnInit() {
    if (this.element.nativeElement instanceof HTMLCanvasElement) {
      this.canvas = this.element.nativeElement;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.canvas && changes.canvas.currentValue) {
      this.setUpCanvas();
      this.setBrush(this.brushType || BrushType.pen);
    }

    if (this.brush && this.canvas) {
      this.brush.setContext(this.createContext());
    }
  }

  ngAfterContentInit(): void {
    if (!(this.canvas instanceof HTMLCanvasElement)) {
      if (this.contentCanvas) {
        this.canvas = this.contentCanvas.nativeElement;
      }
    }

  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  setBrush(type: BrushType) {
    this.brush = brushFactory(type, this.createContext());
  }

  private createContext(): BrushContext {
    return {
      canvas: this.canvas,
      color: this.color,
      lineWidth: +this.lineWidth,
      globalAlpha: +this.globalAlpha
    };
  }

  private setUpCanvas() {
    this.ctx = this.canvas.getContext('2d');

    this.canvas.onmousedown = (evt: MouseEvent) => {

      this.isDrawing = true;

      this.brush.down(getMousePosition(evt, this.canvas));
    };

    this.canvas.onmousemove = (evt: MouseEvent) => {
      if (this.isDrawing) {
        this.brush.move(getMousePosition(evt, this.canvas));
      }
    };
    this.canvas.onmouseup = (evt: MouseEvent) => {
      this.isDrawing = false;
      this.brush.up(getMousePosition(evt, this.canvas));
    };
  }
}
