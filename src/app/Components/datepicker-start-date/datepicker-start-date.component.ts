import {Component} from '@angular/core';

@Component({
  selector: 'app-datepicker-start-date',
  templateUrl: './datepicker-start-date.component.html',
  styleUrls: ['./datepicker-start-date.component.css']
})
export class DatepickerStartDateComponent {
  startDate = new Date(1990, 0, 1);
}
