import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { createCanvas } from 'src/app/imgman/create/canvas';
import { SharedModule } from 'src/app/shared/shared.module';

import { ColorPickerComponent } from './color-picker.component';

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPickerComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    component.canvas = createCanvas();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(fixture).toMatchSnapshot();
  });
});
