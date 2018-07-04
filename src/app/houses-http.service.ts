import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { proxy } from "./config";

@Injectable({
  providedIn: "root"
})
export class HousesHttpService {
  constructor(private _http: HttpClient) {}

  getAllHouseData() {
    return this._http.get(
      `${proxy}https://anapioficeandfire.com/api/houses?page=1&pageSize=50`
    );
  }
}
