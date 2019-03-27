import { Component, OnInit } from '@angular/core';
import { Rgb } from 'src/app/imgman/color/rgb';
import { rgbToString } from 'src/app/imgman/color/rgb-to-string';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  canvas: HTMLCanvasElement;
  colorWheel: HTMLCanvasElement;
  color: string;

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
}
