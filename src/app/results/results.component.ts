import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../services/data.service";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  public dataFetched: {}[];
  public searchedText = "";
  public toggleSubNav: boolean = false;
  public categorySelected: string = "All";
  public categories: string[] = ["All", "House", "Character", "Book"];
  @ViewChild("searchForm") searchForm: NgForm;
  constructor(
    private _dataService: DataService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dataFetched = this._dataService.dataStore;
    console.log(this.dataFetched);

    this.searchedText = this.activateRoute.snapshot.queryParams["q"];
    this.activateRoute.queryParams.subscribe((params: Params) => {
      this.searchedText = params["q"];
    });
  }

  getBorderColor(type: string): string {
    return `var(--${type})`;
  }

  getBoxShadow(type: string): string {
    return `0 2px 2px 0 var(--${type}), 0 0 0 1px var(--${type})`;
  }

  onSubmit() {}
}
