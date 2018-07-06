import { Component, OnInit, ViewChild } from "@angular/core";

import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  private incrementer: number;
  private placeholderArray: string[];
  public placeholderText: string;
  public searchedText: string = "";
  @ViewChild("searchForm") searchForm: NgForm;
  public dataFetched;
  constructor(private _dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.incrementer = 1;
    this.placeholderArray = [
      "Type-in a Character",
      "Type-in a House",
      "Type-in a Book"
    ];
    this.placeholderText = this.placeholderArray[0];

    setInterval(() => {
      this.placeholderText = this.placeholderArray[this.incrementer];
      ++this.incrementer;
      if (this.incrementer === 3) this.incrementer = 0;
    }, 2500);

    this.dataFetched = this._dataService.dataStore;
  }

  public onSubmit() {
    if (this.searchedText.length < 2) return;

    this.router.navigate(["/results"], {
      queryParams: { q: this.searchedText }
    });
  }
}
