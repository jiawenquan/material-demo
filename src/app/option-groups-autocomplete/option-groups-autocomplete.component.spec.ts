import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGroupsAutocompleteComponent } from './option-groups-autocomplete.component';

describe('OptionGroupsAutocompleteComponent', () => {
  let component: OptionGroupsAutocompleteComponent;
  let fixture: ComponentFixture<OptionGroupsAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionGroupsAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionGroupsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
