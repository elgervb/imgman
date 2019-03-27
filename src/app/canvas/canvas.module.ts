import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CanvasRoutingModule } from './canvas-routing.module';
import { CanvasImageComponent, ColorPickerComponent } from './components';
import { DrawingToolbarComponent } from './components/drawing-toolbar/drawing-toolbar.component';
import { CanvasComponent } from './containers';
import { DrawDirective } from './directives/draw.directive';

@NgModule({
  declarations: [
    CanvasComponent,
    ColorPickerComponent,
    CanvasImageComponent,
    DrawDirective,
    DrawingToolbarComponent
  ],
  imports: [
    CommonModule,
    CanvasRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CanvasModule { }
