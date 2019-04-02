import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldWithLabelComponent } from './form-field-with-label.component';

describe('FormFieldWithLabelComponent', () => {
  let component: FormFieldWithLabelComponent;
  let fixture: ComponentFixture<FormFieldWithLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldWithLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
