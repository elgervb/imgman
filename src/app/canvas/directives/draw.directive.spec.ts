import { ElementRef } from '@angular/core';
import { createCanvas } from 'src/app/imgman/create/canvas';

import { DrawDirective } from './draw.directive';

describe('DrawDirective', () => {
  it('should create an instance', () => {
    const directive = new DrawDirective(new ElementRef(createCanvas()));
    expect(directive).toBeTruthy();
  });
});
