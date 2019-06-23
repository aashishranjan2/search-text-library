import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchTextService } from "../../common/search-text.service";
import { of } from "rxjs";
import { HighlightSearchPipe } from 'src/app/pipes/highlight-search.pipe';
import { SideBarComponent } from './sidebar.component';

const textList = ['There should be text added', 'There should another be text added'];
const textInput = {
  value: 'There should be text added'
};
const searchTextServiceStub = {
  getTextUpdatedListener:  () => {return of(textList)},
  getSearchedStringListener:  () => {return of(textInput.value)},
  getTextList: () => {},
  deleteTextFromList: () => {}
};

describe("SideBarComponent", () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;
  let searchService: SearchTextService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarComponent, HighlightSearchPipe],
      providers: [
        { provide: SearchTextService, useValue: searchTextServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    searchService = TestBed.get(SearchTextService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call getSearchedString() and getListOfTexts() method on OnInit", () => {
    spyOn(searchService, 'getTextList');
    spyOn(component, 'getSearchedString');
    spyOn(component, 'getListOfTexts');
    component.getSearchedString();
    component.getListOfTexts();
    expect(component.getSearchedString).toBeDefined();
    expect(component.getListOfTexts).toBeDefined();
  });
  it('getTextUpdatedListener() should return value from observable',
    () => {
      const spy = spyOn(searchTextServiceStub, 'getTextUpdatedListener').and.callThrough();
      component.getSearchedString();
  });
  it("should call deleteText() method and delete text from the list on clicking close button", () => {
    const spy = spyOn(searchService, 'deleteTextFromList');
    component.deleteText(textInput.value);
    expect(spy).toHaveBeenCalled();
  });
   it('emits data to main section component', () => {
    const textInput = 'There should be text added';
    spyOn(component.textRelaytoMainSection, 'emit');
    component.fetchTextToMainSection(textInput);
    expect(component.textRelaytoMainSection.emit).toHaveBeenCalledWith(textInput);
  });
  it('destroys subscription', () => {
    component.textSubscription.unsubscribe();
    component.stringSearchSubscription.unsubscribe();
    expect(component.textSubscription.closed).toEqual(true);
    expect(component.stringSearchSubscription.closed).toEqual(true);
  });
});
