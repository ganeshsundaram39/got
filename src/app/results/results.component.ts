import { Component, OnInit } from "@angular/core";
import { HttpService } from "../services/http.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  public dataFetched: {}[];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.dataFetched = this._httpService.getAllData();
    console.log(this.dataFetched);
  }

  getBorderColor(url: string) {
    return `var(--${
      ["character", "house", "book"].filter(type =>
        new RegExp(type, "i").test(url)
      )[0]
    })`;
  }
}
