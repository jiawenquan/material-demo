import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import {SimpleAutocompleteComponent} from './simple-autocomplete/simple-autocomplete.component';
import {DisplayValueAutocompleteComponent} from './display-value-autocomplete/display-value-autocomplete.component';
import {FilterAutocompleteComponent} from './filter-autocomplete/filter-autocomplete.component';
import {OptionGroupsAutocompleteComponent} from './option-groups-autocomplete/option-groups-autocomplete.component';
import {HighlightTheFirstAutocompleteComponent} from './highlight-the-first-autocomplete/highlight-the-first-autocomplete.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {BasicDatepickerComponent} from './basic-datepicker/basic-datepicker.component';
import {DatepickerStartDateComponent} from './Components/datepicker-start-date/datepicker-start-date.component';
import {DatepickerSelectedValueComponent} from './Components/datepicker-selected-value/datepicker-selected-value.component';
import {DatepickerValidationComponent} from './Components/datepicker-validation/datepicker-validation.component';
import {DatepickerFilterValidationComponent} from './Components/datepicker-filter-validation/datepicker-filter-validation.component';
import {DatepickerInputChangeEventsComponent} from './Components/datepicker-input-change-events/datepicker-input-change-events.component';
import {DisabledDatepickerComponent} from './Components/disabled-datepicker/disabled-datepicker.component';
import {DatepickerTouchUIComponent} from './Components/datepicker-touch-ui/datepicker-touch-ui.component';
import { DatepickerOpenMethodComponent } from './Components/datepicker-open-method/datepicker-open-method.component';
import { DatepickerDifLoeComponent } from './Components/datepicker-dif-loe/datepicker-dif-loe.component';
import { SimpleFormFieldComponent } from './Components/simple-form-field/simple-form-field.component';
import { FormFieldAppearanceVariantsComponent } from './Components/form-field-appearance-variants/form-field-appearance-variants.component';
import { FormFieldWithLabelComponent } from './Components/form-field-with-label/form-field-with-label.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    SimpleAutocompleteComponent,
    DisplayValueAutocompleteComponent,
    FilterAutocompleteComponent,
    OptionGroupsAutocompleteComponent,
    HighlightTheFirstAutocompleteComponent,
    CheckboxComponent,
    BasicDatepickerComponent,
    DatepickerStartDateComponent,
    DatepickerSelectedValueComponent,
    DatepickerValidationComponent,
    DatepickerFilterValidationComponent,
    DatepickerInputChangeEventsComponent,
    DisabledDatepickerComponent,
    DatepickerTouchUIComponent,
    DatepickerOpenMethodComponent,
    DatepickerDifLoeComponent,
    SimpleFormFieldComponent,
    FormFieldAppearanceVariantsComponent,
    FormFieldWithLabelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
