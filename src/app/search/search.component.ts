import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "../http.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  private incrementer: number;
  private placeholderArray: string[];
  private placeholderText: string;
  private searchedText: string;
  @ViewChild("searchForm") searchForm: NgForm;
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
  }

  private onLettersTyped($event) {
    console.log(this.searchedText);
  }
  private getResults() {
    console.log(this.searchedText);
    console.log(this._httpService.getAllData());
  }
  private onSubmit() {
      console.log(this.searchForm)
  }
}
