import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { AddTextComponent } from './components/add-text/add-text.component';

import { SearchTextService } from './common/search-text.service';
import { HighlightSearchPipe } from './pipes/highlight-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SideBarComponent,
    AddTextComponent,
    MainSectionComponent,
    HighlightSearchPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
