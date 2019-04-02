import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerDifLoeComponent } from './datepicker-dif-loe.component';

describe('DatepickerDifLoeComponent', () => {
  let component: DatepickerDifLoeComponent;
  let fixture: ComponentFixture<DatepickerDifLoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerDifLoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerDifLoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
