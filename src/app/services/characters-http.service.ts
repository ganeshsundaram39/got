import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { proxy, domain } from "../config";

@Injectable({
  providedIn: "root"
})
export class CharactersHttpService {
  constructor(private _http: HttpClient) {}

  getAllCharactersInfo() {
    return this._http.get(
      `${proxy}${domain}/api/characters?page=1&pageSize=50`
    );
  }
}
