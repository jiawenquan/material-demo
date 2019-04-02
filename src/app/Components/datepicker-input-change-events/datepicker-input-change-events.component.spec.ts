import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerInputChangeEventsComponent } from './datepicker-input-change-events.component';

describe('DatepickerInputChangeEventsComponent', () => {
  let component: DatepickerInputChangeEventsComponent;
  let fixture: ComponentFixture<DatepickerInputChangeEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerInputChangeEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerInputChangeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
