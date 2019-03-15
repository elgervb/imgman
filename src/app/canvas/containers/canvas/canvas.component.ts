import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas') canvasEl: ElementRef<HTMLCanvasElement>;

  canvasReady = false;

  constructor() { }

  ngOnInit() {

    const canvas = this.canvasEl.nativeElement;

    const img = new Image();
    img.src = '/assets/ugly-dog.png';
    img.onload = () => {
      this.copyImageOnCanvas(canvas, img);
      this.canvasReady = true;
    };
  }

  private copyImageOnCanvas(canvas: HTMLCanvasElement, img: HTMLImageElement) {
    const context = canvas.getContext('2d');
    canvas.height = img.naturalHeight || img.offsetHeight || img.height;
    canvas.width = img.naturalWidth || img.offsetWidth || img.width;

    context.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);

    return canvas;
  }

}
