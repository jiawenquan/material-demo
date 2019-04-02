import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerTouchUIComponent } from './datepicker-touch-ui.component';

describe('DatepickerTouchUIComponent', () => {
  let component: DatepickerTouchUIComponent;
  let fixture: ComponentFixture<DatepickerTouchUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerTouchUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerTouchUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
