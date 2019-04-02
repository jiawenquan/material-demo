import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerValidationComponent } from './datepicker-validation.component';

describe('DatepickerValidationComponent', () => {
  let component: DatepickerValidationComponent;
  let fixture: ComponentFixture<DatepickerValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
