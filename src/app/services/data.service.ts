import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { DetailsHttpService } from "./details-http.service";

interface storeType {
  properties?: any;
}
@Injectable({
  providedIn: "root"
})
export class DataService {
  private _dataStore: storeType[] = [];

  constructor(private httpService: HttpService) {
    this._dataStore = this.httpService.getAllDataFromApi();
  }

  get dataStore(): storeType[] {
    return this._dataStore;
  }
}
