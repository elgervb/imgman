import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AverageColorComponent } from './containers/average-color/average-color.component';
import { ExamplesRoutingModule } from './examples-routing.module';

@NgModule({
  declarations: [AverageColorComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
