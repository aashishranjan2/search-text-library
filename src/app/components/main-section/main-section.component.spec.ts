import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MainSectionComponent } from "./main-section.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchTextService } from "../../common/search-text.service";
import { of, Observable } from "rxjs";
import { HighlightSearchPipe } from 'src/app/pipes/highlight-search.pipe';

const textList = ['There should be text added', 'There should another be text added'];
const textInput = {
  value: 'There should be text added'
};
const searchTextServiceStub = {
  getSearchedStringListener:  () => {return of(textInput.value)}
};

describe("MainSectionComponent", () => {
  let component: MainSectionComponent;
  let fixture: ComponentFixture<MainSectionComponent>;
  let service: SearchTextService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainSectionComponent, HighlightSearchPipe],
      providers: [
        { provide: SearchTextService, useValue: searchTextServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSectionComponent);
    component = fixture.componentInstance;
    service = TestBed.get(SearchTextService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call getSearchedString() on OnInit", () => {
    spyOn(component, 'getSearchedString');
    component.getSearchedString();
    expect(component.getSearchedString).toBeDefined();
  });
  it("should display selected text from side bar into main display section", () => {
    component.getTextToMainSection(textInput.value);
    expect(component.searchedText).toEqual(textInput.value);
  });
  it('getSearchedStringListener() should return value from observable',
    () => {
      spyOn(searchTextServiceStub, 'getSearchedStringListener').and.callThrough();
      component.getSearchedString();
      expect(component.getSearchedString).toBeDefined();
  });
  it('destroys subscription', () => {
    component.stringSearchSubscription.unsubscribe();
    expect(component.stringSearchSubscription.closed).toEqual(true);
  });
});
