import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { CanvasImageComponent, ColorPickerComponent } from '../../components';
import { DrawingToolbarComponent } from '../../components/drawing-toolbar/drawing-toolbar.component';
import { DrawDirective } from '../../directives/draw.directive';

import { CanvasComponent } from './canvas.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CanvasComponent,
        ColorPickerComponent,
        CanvasImageComponent,
        DrawingToolbarComponent,
        DrawDirective
      ],
      imports: [SharedModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
