import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BrushType } from 'src/app/imgman/drawing/models';

const MIN_OPACITY = 0.1;

@Component({
  selector: 'app-drawing-toolbar',
  templateUrl: './drawing-toolbar.component.html',
  styleUrls: ['./drawing-toolbar.component.css']
})
export class DrawingToolbarComponent implements OnInit, OnDestroy {

  @Output() readonly changed = new EventEmitter<DrawingSettings>();

  form: FormGroup;
  brushType = BrushType;

  private readonly destroyed$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      brushType: [BrushType.marker, Validators.required],
      enabled: [false, Validators.required],
      opacity: [1.0, [Validators.required, Validators.min(MIN_OPACITY), Validators.max(1)]],
      lineWidth: [4, [Validators.required, Validators.min(1), Validators.max(100)]]
    });

    this.form.valueChanges
      .pipe(
        takeUntil(this.destroyed$)
      ).subscribe((value: DrawingSettings) => this.changed.emit(value));
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

export interface DrawingSettings {
  enabled: boolean;
  brushType: BrushType;
  opacity: number;
  lineWidth: number;
}
