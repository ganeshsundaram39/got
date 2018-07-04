import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "../services/http.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

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
  private dataFetched;
  constructor(private _httpService: HttpService, private router: Router) {}

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

    this.dataFetched = this._httpService.getAllData();
  }

  public onSubmit() {
    if (this.searchedText.length < 2) return;

    this.router.navigate(["/results"], {
      queryParams: { q: this.searchedText }
    });
  }
}
