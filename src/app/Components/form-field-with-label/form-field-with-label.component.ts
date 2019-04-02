import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-field-with-label',
  templateUrl: './form-field-with-label.component.html',
  styleUrls: ['./form-field-with-label.component.css']
})
export class FormFieldWithLabelComponent {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}
