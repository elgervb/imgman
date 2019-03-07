import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AverageColorComponent } from './containers/average-color/average-color.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ResizeComponent } from './containers/thumb/resize/resize.component';

@NgModule({
  declarations: [AverageColorComponent, ResizeComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
