import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CanvasRoutingModule } from './canvas-routing.module';
import { CanvasImageComponent, ColorPickerComponent } from './components';
import { CanvasComponent } from './containers';
import { DrawDirective } from './directives/draw.directive';

@NgModule({
  declarations: [
    CanvasComponent,
    ColorPickerComponent,
    CanvasImageComponent,
    DrawDirective
  ],
  imports: [
    CommonModule,
    CanvasRoutingModule,
    SharedModule
  ]
})
export class CanvasModule { }
