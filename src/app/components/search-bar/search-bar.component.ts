import { Component, Output, EventEmitter } from '@angular/core';
import { SearchTextService } from '../../common/search-text.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchedText: string = '';

  constructor(private searchTextService: SearchTextService) {}

  /**
   * 
   * @description textHighlight(searchString) method gets called when a user searches for any string in the text.
   * A user types in some string value and clicks 'Search' button in search bar.
   */
  textHighlight(searchString: any) {
    this.searchedText = searchString.value;
    this.searchTextService.searchStringInText(this.searchedText);
  }
}
