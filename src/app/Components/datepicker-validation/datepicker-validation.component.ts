import {Component} from '@angular/core';

@Component({
  selector: 'app-datepicker-validation',
  templateUrl: './datepicker-validation.component.html',
  styleUrls: ['./datepicker-validation.component.css']
})
export class DatepickerValidationComponent {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

}
