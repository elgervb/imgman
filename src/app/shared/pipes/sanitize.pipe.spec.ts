import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { SanitizePipe } from './sanitize.pipe';

describe('SanitizePipe', () => {

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new SanitizePipe(sanitizer);
    expect(pipe).toBeTruthy();
  }));
});
