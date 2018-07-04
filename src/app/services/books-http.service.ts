import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { proxy, domain } from "../config";

@Injectable({
  providedIn: "root"
})
export class BooksHttpService {
  constructor(private _http: HttpClient) {}

  getAllBookInfo() {
    return this._http.get(`${proxy}${domain}/api/books?page=1&pageSize=50`);
  }
}
