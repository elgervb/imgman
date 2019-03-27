import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SanitizePipe } from './pipes/sanitize.pipe';

@NgModule({
  declarations: [
    SanitizePipe,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SanitizePipe,
    ToolbarComponent
  ]
})
export class SharedModule { }
