import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchedPipe } from "./searched.pipe";
import { SearchedHighlightPipe } from "./searched-highlight.pipe";
import { NoSanitizePipe } from "./no-sanitize.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchedPipe,
    SearchedHighlightPipe,
    NoSanitizePipe
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
