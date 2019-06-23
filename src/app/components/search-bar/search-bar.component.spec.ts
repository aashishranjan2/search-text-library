import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchTextService } from "../../common/search-text.service";
import { of } from "rxjs";
import { SearchBarComponent } from './search-bar.component';

const textList = ['There should be text added', 'There should another be text added'];
const searchTextServiceStub = {
  getTextUpdatedListener:  () => {return of(textList)},
  searchStringInText: () => {}
};
const textInput = {
  value: 'There should be text added'
};
describe("SearchBarComponent", () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let searchService: SearchTextService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      providers: [
        { provide: SearchTextService, useValue: searchTextServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    searchService = TestBed.get(SearchTextService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call textHighlight() method on clicking Search button", () => {
    const textToSearch = {
      value: 'There'
    }
    spyOn(searchService, "searchStringInText");
    component.textHighlight(textInput );
    expect(component.searchedText).toContain(textToSearch.value);
  });
});
