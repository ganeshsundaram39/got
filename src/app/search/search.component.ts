import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  private incrementer: number;
  private placeholderArray: string[];
  private placeholderText: string;
  private search: string;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    console.log(this.incrementer);
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

  getResults() {
    console.log(this.search);
    console.log(this._httpService.getAllData());
  }
}
