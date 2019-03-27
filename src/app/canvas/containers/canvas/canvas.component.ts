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

  canvas: HTMLCanvasElement;

  // TODO: move this to a color picker toolbar
  colorWheel: HTMLCanvasElement;
  color: string;

  drawingSettings: DrawingSettings;

  constructor() { }

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
    this.color = rgbToString(color);
  }

  setDrawingSettings(drawingSettings: DrawingSettings) {
    this.drawingSettings = drawingSettings;
  }
}
