import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchTextService } from 'src/app/common/search-text.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html'
})
export class MainSectionComponent implements OnInit, OnDestroy{
  searchedText: string = '';
  searchString: string;
  stringSearchSubscription: Subscription;
  constructor(private searchTextService: SearchTextService) {}

  ngOnInit() {
    this.getSearchedString();
  }
  /**
   * @description getSearchedString() method gets called on OnInit.When a user searches for any string in search bar
   * and hits 'Search' button, searched string gets highlighted present in the main section.
   */
  getSearchedString(): void {
    this.stringSearchSubscription = this.searchTextService
      .getSearchedStringListener()
      .subscribe(searchString => {
        this.searchString = searchString;
      });
  }
  /**
   * @description getTextToMainSection(event) method gets called when a user selects a text from side bar. Text gets emitted
   * to main section component
   */
  getTextToMainSection(event: any) {
    this.searchedText = event;
  }

  ngOnDestroy() {
    this.stringSearchSubscription.unsubscribe();
  }
}
