import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "../http.service";
import { NgForm } from "@angular/forms";
import { isArray } from "util";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  private incrementer: number;
  private placeholderArray: string[];
  private placeholderText: string;
  private searchedText: string = "";
  private showIt: boolean = false;
  @ViewChild("searchForm") searchForm: NgForm;
  private dataFetched: {}[];
  constructor(private _httpService: HttpService) {}

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

    // this.dataFetched = [
    //   "House Algood",
    //   "House Allyrion of Godsgrace",
    //   "House Amber",
    //   "House Ambrose",
    //   "House Arryn of Gulltown"
    // ];
    this.dataFetched = this._httpService.getAllData();
    console.log(this.dataFetched);
  }

  public onSubmit() {
    if (this.searchedText.length < 2) return;
  }
}
