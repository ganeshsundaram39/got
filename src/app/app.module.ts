import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchedPipe } from "./pipes/searched.pipe";
import { SearchedHighlightPipe } from "./pipes/searched-highlight.pipe";
import { NoSanitizePipe } from "./pipes/no-sanitize.pipe";
import { AppRoutesModule } from "./app-routes.module";
import { DetailsComponent } from "./components/details/details.component";
import { ResultsComponent } from "./components/results/results.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CategoryPipe } from "./pipes/category.pipe";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { KeysPipe } from "./pipes/keys.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { NamePipe } from "./pipes/name.pipe";
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchedPipe,
    SearchedHighlightPipe,
    NoSanitizePipe,
    DetailsComponent,
    ResultsComponent,
    PageNotFoundComponent,
    CategoryPipe,
    NavbarComponent,
    KeysPipe,
    SortPipe,
    NamePipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutesModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
