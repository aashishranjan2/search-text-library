import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class SearchTextService {
    textList = [];
    textToSearch: string = '';
    textListUpdated = new BehaviorSubject(this.textList);
    textSearchUpdated = new BehaviorSubject(this.textToSearch);

    /**
     * @description getTextList() method contains all the text in the list. On application load, the list is empty
     */
    getTextList() {
        return [...this.textList];
    }

    /**
     * 
     * @param text 
     * @description addTextToList(text) gets called from AddTextComponent and stores a text in the list and sends it to the
     * side bar component using next() method
     */
    addTextToList(text: string) {
        this.textList.push(text);
        this.textListUpdated.next([...this.textList]);
    }

    /**
    getTextUpdatedListener(): Observable<string[]> {
     * @description getSearchedStringListener() - setting up listener
     */
    getTextUpdatedListener(): Observable<string[]> {
        return this.textListUpdated.asObservable();
    }

    /**
     * @description getSearchedStringListener() - setting up listener
     */
    getSearchedStringListener(): Observable<string> {
        return this.textSearchUpdated.asObservable();
    }
    /**
     * 
     * @param text 
     * @description searchStringInText(text) method relays text value to the component where searched string has to be highlighted
     */
    searchStringInText(text: string) {
      this.textSearchUpdated.next(text);
    }
    /**
     * 
     * @param index 
     * @description deleteTextFromList(index) method deletes a text from the list based on index 
     */
    deleteTextFromList(index: any) {
        const indexValue = Number(index['id']);
        this.textList.splice(indexValue, 1);
        this.textListUpdated.next([...this.textList]);
    }
}