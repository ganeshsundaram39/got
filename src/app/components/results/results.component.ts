import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  public dataFetched: {}[];
  public searchedText: string = "";
  public categorySelected: string = "All";

  constructor(
    private _dataService: DataService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // get all data from  data service
    this.dataFetched = this._dataService.dataStore;
    // get query parameter q and
    // pass this to navbar component using property binding
    this.searchedText = this.activateRoute.snapshot.queryParams["q"];
    // get query parameter q if changed afterwards
    this.activateRoute.queryParams.subscribe((params: Params) => {
      this.searchedText = params["q"];
    });

    // if nothing is searched return all data
    if (this.searchedText == undefined) this.searchedText = "";
  }

  getBorderColor(type: string): string {
    return `var(--${type})`;
  }

  getBoxShadow(type: string): string {
    return `0 2px 2px 0 var(--${type}), 0 0 0 1px var(--${type})`;
  }

  userEnteringText(searchedText: string): void {
    // get searched text from navbar component using component event binding
    this.searchedText = searchedText;
  }

  userSelectingCategory(categorySelected: string): void {
    // get selected category from navbar component using component event binding
    this.categorySelected = categorySelected;
  }
}
