import { Component, OnInit } from '@angular/core';
import { Rgb } from 'src/app/imgman/color/rgb';
import { rgbToString } from 'src/app/imgman/color/rgb-to-string';

import { DrawingSettings } from '../../components/drawing-toolbar/drawing-toolbar.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor() { }

  canvas: HTMLCanvasElement;

  // TODO: move this to a color picker toolbar
  colorWheel: HTMLCanvasElement;
  color: string;

  drawingSettings: DrawingSettings;

  progress: number;

  ngOnInit() {
    //
  }

  canvasIsReady(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  colorWheelReady(colorWheel: HTMLCanvasElement) {
    this.colorWheel = colorWheel;
  }

  setColor(color: Rgb) {
    setTimeout(() => this.color = rgbToString(color), 0);
  }

  setDrawingSettings(drawingSettings: DrawingSettings) {
    this.drawingSettings = drawingSettings;
  }

  stencilClick(event: UIEvent) {
    console.log('Got a click from a StencilJS button', event);
  }

  stencilCompleted(event: Event) {
    console.log('Got a completed event from a StencilJS progressbar', event);
  }

  setProgress(progress: number) {
    this.progress = progress;
  }
}
