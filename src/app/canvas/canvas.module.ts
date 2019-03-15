import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CanvasRoutingModule } from './canvas-routing.module';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { CanvasComponent } from './containers/canvas/canvas.component';

@NgModule({
  declarations: [CanvasComponent, ColorPickerComponent],
  imports: [
    CommonModule,
    CanvasRoutingModule,
    SharedModule
  ]
})
export class CanvasModule { }
