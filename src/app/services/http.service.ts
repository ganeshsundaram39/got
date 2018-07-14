import { Injectable } from "@angular/core";
import { BooksHttpService } from "./books-http.service";
import { HousesHttpService } from "./houses-http.service";
import { CharactersHttpService } from "./characters-http.service";
import { getId } from "../shared";

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
    // get  data from services and process them
    // to assign type and id
    this.booksHttp.getAllBookInfo().subscribe(
      (response: {}[]) => {
        // loop through response
        response.forEach(d => {
          // assign n/a if its empty
          if (d["name"] === "") d["name"] = "N / A";
          // assign type
          d["type"] = "book";
          //   get id from url and assign
          d["id"] = getId(d["url"]);
        });
        this.data.push(...response);
      },
      error => {
        console.log(error);
      }
    );
    this.housesHttp.getAllHouseData().subscribe(
      (response: {}[]) => {
        response.forEach(d => {
          if (d["name"] === "") d["name"] = "N / A";
          d["type"] = "house";
          d["id"] = getId(d["url"]);
        });
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
        response.forEach(d => {
          if (d["name"] === "") d["name"] = "N / A";
          d["type"] = "character";
          d["id"] = getId(d["url"]);
        });
        this.data.push(...response);
      },
      error => {
        console.log(error);
      }
    );
    return this.data;
  }
}
