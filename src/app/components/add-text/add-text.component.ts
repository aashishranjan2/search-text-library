import { Component, EventEmitter, Output } from '@angular/core';
import { SearchTextService } from 'src/app/common/search-text.service';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css']
})
export class AddTextComponent {
  newText = '';

  constructor(private searchTextService: SearchTextService) {

}

/**
 * @description storeText(textInput) method gets called when a user tries to add any text and clicks on 'Add Text' button 
 * in the sidebar, it takes the text and add it to the list
*/
storeText(textInput: any) {
    this.newText = textInput.value;
    if (this.newText.trim().length > 0) {
        this.searchTextService.addTextToList(this.newText);
    }
  }
}
