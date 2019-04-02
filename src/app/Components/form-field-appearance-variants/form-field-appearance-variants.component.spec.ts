import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAppearanceVariantsComponent } from './form-field-appearance-variants.component';

describe('FormFieldAppearanceVariantsComponent', () => {
  let component: FormFieldAppearanceVariantsComponent;
  let fixture: ComponentFixture<FormFieldAppearanceVariantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldAppearanceVariantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldAppearanceVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
