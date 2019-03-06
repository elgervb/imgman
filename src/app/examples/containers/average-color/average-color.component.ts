import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { average } from 'src/app/imgman/color/average';
import { isDark } from 'src/app/imgman/color/is-dark';
import { rgb2Hex } from 'src/app/imgman/color/rgb-2-hex';

@Component({
  selector: 'app-average-color',
  templateUrl: './average-color.component.html',
  styleUrls: ['./average-color.component.css']
})
export class AverageColorComponent implements OnInit, AfterViewInit {

  averageColor: string;
  isDark: boolean;

  @ViewChild('image') image: ElementRef;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    const image: HTMLImageElement = this.image.nativeElement;
    image.onload = () => {
      const avg = average(image);
      this.averageColor = rgb2Hex(avg);

      document.body.style.backgroundColor = this.averageColor;
      this.isDark = isDark(avg);
    };
  }

}
