import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  Inject
} from '@angular/core';
import { SearchTextService } from '../../common/search-text.service';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {
  textList = [];
  isActive: any;
  searchString: string = '';
  textSubscription: Subscription;
  stringSearchSubscription: Subscription;
  @Output() textRelaytoMainSection = new EventEmitter<string>();

  constructor(private searchTextService: SearchTextService,
    @Inject(DOCUMENT) document: Document) {}

  ngOnInit() {
    this.textList = this.searchTextService.getTextList();
    this.getListOfTexts();
    this.getSearchedString();
  }

  /**
   * @description getListOfTexts() method gets called from OnInit() when there is a list with new texts available
   * and displays the list in side bar
   */
  getListOfTexts() {
    this.textSubscription = this.searchTextService
      .getTextUpdatedListener()
      .subscribe(textList => {
        this.textList = textList;
      });
  }
  /**
   * @description getSearchedString() method gets called from OnInit() when there is an event triggered for searching
   * a string present in the text. It highlights the string wherever present in the application
   */
  getSearchedString() {
    this.stringSearchSubscription = this.searchTextService
    .getSearchedStringListener()
    .subscribe(searchString => {
      this.searchString = searchString;
    });
  }
  /**
 * @param event 
 * @description deleteText(event) method gets called when a user clicks on 'x' button next to every text. It sends a signal
 * to delete text from the list
 */
  deleteText(event: string) {
    this.searchTextService.deleteTextFromList(event);
  }

  /**
   * 
   * @param event 
   * @description fetchTextToMainSection(event) method gets called when a user selects any of the text from side bar. It emits
   * data to the main section component where text will be displayed
   */
  fetchTextToMainSection(event: any) {
    this.textRelaytoMainSection.emit(event);
  }

  ngOnDestroy() {
    this.textSubscription.unsubscribe();
    this.stringSearchSubscription.unsubscribe();
  }
}
