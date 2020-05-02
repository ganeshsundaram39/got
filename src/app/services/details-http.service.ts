import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { proxy, domain } from "../config";

@Injectable({
  providedIn: "root"
})
export class DetailsHttpService {
  constructor(private _httpClient: HttpClient) { }

  getDetail(request: { type: string; id: number }) {
    // get details
    return this._httpClient.get(
      `${proxy}${domain}/api/${request.type}s/${request.id}`
    );
  }
  getDetail2(url) {
    // get details
    return this._httpClient.get(
      url
    );
  }
}
