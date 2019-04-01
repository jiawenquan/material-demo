import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightTheFirstAutocompleteComponent } from './highlight-the-first-autocomplete.component';

describe('HighlightTheFirstAutocompleteComponent', () => {
  let component: HighlightTheFirstAutocompleteComponent;
  let fixture: ComponentFixture<HighlightTheFirstAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightTheFirstAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightTheFirstAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
