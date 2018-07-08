import { Injectable } from "@angular/core";
import { BooksHttpService } from "./books-http.service";
import { HousesHttpService } from "./houses-http.service";
import { CharactersHttpService } from "./characters-http.service";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  data: { properties?: any }[] = [];
  constructor(
    private booksHttp: BooksHttpService,
    private housesHttp: HousesHttpService,
    private charactersHttp: CharactersHttpService
  ) {}

  public getAllDataFromApi() {
    this.booksHttp.getAllBookInfo().subscribe(
      (response: {}[]) => {
        response.forEach(d => (d["type"] = "book"));
        this.data.push(...response);
      },
      error => {
        console.log(error);
      }
    );
    this.housesHttp.getAllHouseData().subscribe(
      (response: {}[]) => {
        response.forEach(d => (d["type"] = "house"));
        response = response.map(d => {
          d["name"] = d["name"].replace(new RegExp("House ", "gi"), "");
          return d;
        });
        this.data.push(...response);
      },
      error => {
        console.log(error);
      }
    );
    this.charactersHttp.getAllCharactersInfo().subscribe(
      (response: {}[]) => {
        response.forEach(d => (d["type"] = "character"));
        this.data.push(...response);
      },
      error => {
        console.log(error);
      }
    );
    return this.data;
  }
}
