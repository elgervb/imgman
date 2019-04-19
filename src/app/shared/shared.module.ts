import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EvbValueAccessorDirective } from './directives/evbcontrolvalueaccessor';
import { IsDarkPipe } from './pipes/is-dark.pipe';
import { RgbToStringPipe } from './pipes/rgb-to-string.pipe';
import { SanitizePipe } from './pipes/sanitize.pipe';

@NgModule({
  declarations: [
    EvbValueAccessorDirective,
    SanitizePipe,
    ToolbarComponent,
    IsDarkPipe,
    RgbToStringPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EvbValueAccessorDirective,
    IsDarkPipe,
    RgbToStringPipe,
    SanitizePipe,
    ToolbarComponent
  ]
})
export class SharedModule { }
