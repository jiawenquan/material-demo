import {Component} from '@angular/core';

@Component({
  selector: 'app-datepicker-filter-validation',
  templateUrl: './datepicker-filter-validation.component.html',
  styleUrls: ['./datepicker-filter-validation.component.css']
})
export class DatepickerFilterValidationComponent {
  // myFilter = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // };

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    console.log(d.getDate());
    return day !== 0 && day !== 6;
  };
}
