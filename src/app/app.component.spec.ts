import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MainSectionComponent } from './components/main-section/main-section.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { HighlightSearchPipe } from './pipes/highlight-search.pipe';
import { SearchTextService } from './common/search-text.service';
import { AddTextComponent } from './components/add-text/add-text.component';

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SearchBarComponent, MainSectionComponent, SideBarComponent, HighlightSearchPipe, AddTextComponent],
      providers: [SearchTextService]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
