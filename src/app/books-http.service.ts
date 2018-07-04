import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { proxy } from "./config";

@Injectable({
  providedIn: "root"
})
export class BooksHttpService {
  constructor(private _http: HttpClient) {}

  getAllBookInfo() {
    return this._http.get(
      `${proxy}https://anapioficeandfire.com/api/books?page=1&pageSize=50`
    );
  }
}
