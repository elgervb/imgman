import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EvbValueAccessorDirective } from './directives/evbcontrolvalueaccessor';
import { SanitizePipe } from './pipes/sanitize.pipe';

@NgModule({
  declarations: [
    EvbValueAccessorDirective,
    SanitizePipe,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EvbValueAccessorDirective,
    SanitizePipe,
    ToolbarComponent
  ]
})
export class SharedModule { }
