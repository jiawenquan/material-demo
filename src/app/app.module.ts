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
import { HighlightTheFirstAutocompleteComponent } from './highlight-the-first-autocomplete/highlight-the-first-autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

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
