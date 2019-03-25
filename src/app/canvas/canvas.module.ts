import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CanvasRoutingModule } from './canvas-routing.module';
import { CanvasImageComponent, ColorPickerComponent } from './components';
import { CanvasComponent } from './containers';

@NgModule({
  declarations: [
    CanvasComponent,
    ColorPickerComponent,
    CanvasImageComponent
  ],
  imports: [
    CommonModule,
    CanvasRoutingModule,
    SharedModule
  ]
})
export class CanvasModule { }
