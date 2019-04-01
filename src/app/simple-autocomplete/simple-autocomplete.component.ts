import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-simple-autocomplete',
  templateUrl: './simple-autocomplete.component.html',
  styleUrls: ['./simple-autocomplete.component.css']
})
export class SimpleAutocompleteComponent {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

}
