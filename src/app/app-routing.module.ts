import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import {SimpleAutocompleteComponent} from './simple-autocomplete/simple-autocomplete.component';
import {DisplayValueAutocompleteComponent} from './display-value-autocomplete/display-value-autocomplete.component';
import {FilterAutocompleteComponent} from './filter-autocomplete/filter-autocomplete.component';
import {OptionGroupsAutocompleteComponent} from './option-groups-autocomplete/option-groups-autocomplete.component';
import {HighlightTheFirstAutocompleteComponent} from './highlight-the-first-autocomplete/highlight-the-first-autocomplete.component';
import {CheckboxComponent} from './checkbox/checkbox.component';

const routes: Routes = [
  {
    path: 'autocomplete',
    component: AutocompleteComponent,
  },
  {
    path: 'simpleAutocompleteComponent',
    component: SimpleAutocompleteComponent,
  }
  ,
  {
    path: 'displayValueAutocompleteComponent',
    component: DisplayValueAutocompleteComponent,
  },
  {
    path: 'filterAutocompleteComponent',
    component: FilterAutocompleteComponent,
  },
  {
    path: 'optionGroupsAutocompleteComponent',
    component: OptionGroupsAutocompleteComponent,
  },
  {
    path: 'highlightTheFirstAutocompleteComponent',
    component: HighlightTheFirstAutocompleteComponent,
  },
  {
    path: 'checkboxComponent',
    component: CheckboxComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
