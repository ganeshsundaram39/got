import { Injectable } from "@angular/core";
import { BooksHttpService } from "./books-http.service";
import { HousesHttpService } from "./houses-http.service";
import { CharactersHttpService } from "./characters-http.service";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  datastore = [];
  constructor(
    private booksHttp: BooksHttpService,
    private housesHttp: HousesHttpService,
    private charactersHttp: CharactersHttpService
  ) {}

  public getAllData() {
    this.booksHttp.getAllBookInfo().subscribe(
      data => {
        this.datastore.push(data);
      },
      error => {
        console.log(error);
      }
    );
    this.housesHttp.getAllHouseData().subscribe(
      data => {
        this.datastore.push(data);
      },
      error => {
        console.log(error);
      }
    );
    this.charactersHttp.getAllHouseData().subscribe(
      data => {
        this.datastore.push(data);
      },
      error => {
        console.log(error);
      }
    );
    return this.datastore;
  }
}
