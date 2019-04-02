import {Component, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker-input-change-events',
  templateUrl: './datepicker-input-change-events.component.html',
  styleUrls: ['./datepicker-input-change-events.component.css']
})
export class DatepickerInputChangeEventsComponent {

  events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}:${event.value}`);

  }
}
