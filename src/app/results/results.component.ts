import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  public dataFetched: {}[];
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.dataFetched = this._dataService.dataStore;
    console.log(this.dataFetched);
  }

  getBorderColor(type: string): string {
    return `var(--${type})`;
  }

  getBoxShadow(type: string): string {
    return `0 2px 2px 0 var(--${type}), 0 0 0 1px var(--${type})`;
  }
}
