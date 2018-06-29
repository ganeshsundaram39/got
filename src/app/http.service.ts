import { Injectable } from "@angular/core";
import { BooksHttpService } from "./books-http.service";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private booksHttp: BooksHttpService) {}

  public getAllData() {
    return this.booksHttp.getAllBookInfo();
  }
}
