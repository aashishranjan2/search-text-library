import {TestBed} from '@angular/core/testing';
import { SearchTextService } from './search-text.service';
import { of } from 'rxjs';

let service: SearchTextService;
const textList = ['There should be text added', 'There should another be text added'];
const textListToDelete = ['There should be text added', 'There should another be text added'];
const textInput = {
  value: 'There should be text added'
};

const searchTextServiceStub = {
  textListUpdated:  () => {return of(textList)},
  textSearchUpdated: () => {},    
  getTextList: () => {return of(textList)}
};

describe('SearchTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    service = TestBed.get(SearchTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getTextList() method to fetch all the texts present in the list', () => {
    service.textList = textList;
    service.getTextList();
    expect(service.getTextList()).toEqual(textList);
  });
  it('should call addTextToList() method to add text in the list', () => {
    spyOn(searchTextServiceStub, 'textListUpdated').and.callThrough();
    service.textList = textList;
    service.addTextToList(textInput.value);
    expect(service.textList.length).toBeGreaterThanOrEqual(3);
  });
  it('should call searchStringInText() method to search for a specific string in the text', () => {
    spyOn(service.textSearchUpdated, 'next').and.callThrough();
    const searchString = 'text';
    service.searchStringInText(searchString);
    expect(service.textSearchUpdated.next).toHaveBeenCalledWith(searchString);
  });
  it('should call deleteTextFromList() method to delete text from the list', () => {
    spyOn(service.textListUpdated, 'next').and.callThrough();
    service.textList = textListToDelete;
    const index = {
      id: '0'
    }
    service.deleteTextFromList(index);
    expect(service.textListUpdated.next).toHaveBeenCalledWith(textListToDelete);
  });
});
