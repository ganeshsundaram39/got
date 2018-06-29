import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BooksHttpService {
  constructor(private _http: HttpClient) {}

  getAllBookInfo() {
    this._http
      .get(
        "https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/houses/"
      )
      .subscribe(
        data => {
          console.log(data);
          return data;
        },
        error => {
          return error;
        }
      );
  }
}
