import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { domain } from "../config";

@Injectable({
  providedIn: "root"
})
export class MultipleHttpService {
  constructor(private http: HttpClient) {}

  getData(value) {
    return Observable.forkJoin(
      value.map(v =>
        this.http
          .get(`${domain}/api/${v.type}/${v.id}`)
          .map((res: { name?: string }) => {
            if (res.name == "") {
              v["name"] = "N/A";
            } else {
              v["name"] = res.name;
            }
            return value;
          })
      )
    );
  }
}
