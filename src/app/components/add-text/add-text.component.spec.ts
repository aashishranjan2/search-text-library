import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchTextService } from "../../common/search-text.service";
import { of, Observable } from "rxjs";
import { AddTextComponent } from "./add-text.component";

const textList = ['There should be text added', 'There should another be text added'];
const searchTextServiceStub = {
  getTextUpdatedListener: of([textList]),
  addTextToList: () => {}
};
const textInput = {
  value: 'There should be text added'
};

describe("AddTextComponent", () => {
  let component: AddTextComponent;
  let fixture: ComponentFixture<AddTextComponent>;
  let searchService: SearchTextService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTextComponent],
      providers: [
        { provide: SearchTextService, useValue: searchTextServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextComponent);
    searchService = TestBed.get(SearchTextService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call storeText() method on clicking Add button", () => {
    spyOn(searchService, "addTextToList");
    component.storeText(textInput);
    expect(component.newText).toEqual(textInput.value);
  });
});
