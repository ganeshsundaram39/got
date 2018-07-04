import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { proxy } from "./config";

@Injectable({
  providedIn: "root"
})
export class CharactersHttpService {
  constructor(private _http: HttpClient) {}

  getAllHouseData() {
    return this._http.get(
      `${proxy}https://anapioficeandfire.com/api/characters?page=1&pageSize=50`
    );
  }
}
