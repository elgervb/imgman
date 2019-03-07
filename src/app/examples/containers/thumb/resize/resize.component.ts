import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { createCanvasFromImage } from 'src/app/imgman/create/canvas-from-image';
import { toDataUrl } from 'src/app/imgman/data-url/to-data-url';
import { MimeType } from 'src/app/imgman/mimetype';
import { resize } from 'src/app/imgman/thumb/resize';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css']
})
export class ResizeComponent implements OnInit, AfterViewInit {

  @ViewChild('srcImage') srcImage: ElementRef;

  dataUri: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const srcImage: HTMLImageElement = this.srcImage.nativeElement;
    srcImage.onload = () => {
      const canvas = createCanvasFromImage(srcImage);
      // tslint:disable-next-line:no-magic-numbers
      const resized = resize(canvas, 200, 200);

      this.dataUri = this.sanitizer.bypassSecurityTrustUrl(toDataUrl(resized, MimeType.PNG));
    };
  }
}
