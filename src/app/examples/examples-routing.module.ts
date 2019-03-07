import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AverageColorComponent } from './containers/average-color/average-color.component';
import { ResizeComponent } from './containers/thumb/resize/resize.component';

const routes: Routes = [
  {
    path: 'average-color',
    component: AverageColorComponent
  },
  {
    path: 'resize',
    component: ResizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
