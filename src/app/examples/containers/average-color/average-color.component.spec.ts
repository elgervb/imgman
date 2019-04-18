import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageColorComponent } from './average-color.component';

describe('AverageColorComponent', () => {
  let component: AverageColorComponent;
  let fixture: ComponentFixture<AverageColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AverageColorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(fixture).toMatchSnapshot();
  });
});
