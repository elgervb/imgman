import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AverageColorComponent } from './containers/average-color/average-color.component';

const routes: Routes = [
  {
    path: 'average-color',
    component: AverageColorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
