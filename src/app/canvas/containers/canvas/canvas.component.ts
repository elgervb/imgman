import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  canvas: HTMLCanvasElement;
  colorWheel: HTMLCanvasElement;

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
}
