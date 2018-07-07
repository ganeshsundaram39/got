import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../services/data.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  public dataFetched: {}[];
  public showSubNav:boolean=false;
  @ViewChild("searchForm") searchForm: NgForm;
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.dataFetched = this._dataService.dataStore;
    console.log(this.dataFetched);
    setTimeout(()=>{
        this.showSubNav=true;
    },1000)
  }

  getBorderColor(type: string): string {
    return `var(--${type})`;
  }

  getBoxShadow(type: string): string {
    return `0 2px 2px 0 var(--${type}), 0 0 0 1px var(--${type})`;
  }

  //   getBackgroundColor(name: string): string {
  //     if (!name.toLowerCase()) return `#efefef`;
  //   }
  onSubmit() {}
}
