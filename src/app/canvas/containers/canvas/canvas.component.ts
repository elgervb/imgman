import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PickedFile } from '@elgervb/stencil-components/dist/types/components/file-picker/pickedfile';
import { Rgb } from 'src/app/imgman/color/rgb';

import { DrawingSettings } from '../../components/drawing-toolbar/drawing-toolbar.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @Input() image: string;

  constructor() { }

  @ViewChild('flyout') flyout: ElementRef<HTMLEvbFlyoutElement>;

  canvas: HTMLCanvasElement;

  // TODO: move this to a color picker toolbar
  colorWheel: HTMLCanvasElement;
  color: Rgb;
  colorPickerActive: boolean;

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
    setTimeout(() => this.color = color, 0);
  }

  setImage(event: CustomEvent<PickedFile>) {
    this.image = event.detail.dataUrl;
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

  setColorPickerActive(isActive: boolean) {
    this.colorPickerActive = isActive;
  }

  showFlyout() {
    this.flyout.nativeElement.toggle(true);
  }
}
