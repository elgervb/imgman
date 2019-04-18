import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingToolbarComponent } from './drawing-toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('DrawingToolbarComponent', () => {
  let component: DrawingToolbarComponent;
  let fixture: ComponentFixture<DrawingToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawingToolbarComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(fixture).toMatchSnapshot();
  });
});
