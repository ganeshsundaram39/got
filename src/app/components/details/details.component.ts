import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { DetailsHttpService } from "../../services/details-http.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  request: { type: string; id: number };
  details: {};
  loaderVisible: boolean = true;

  constructor(
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
    private _detailsHttp: DetailsHttpService,
    private _route: Router
  ) {}

  ngOnInit() {
    // get all parameters
    this.request = {
      type: this._activatedRoute.snapshot.params["type"],
      id: +this._activatedRoute.snapshot.params["id"]
    };
    // send parameters to service to get full details
    this._detailsHttp.getDetails(this.request).subscribe(
      response => {
        this.details = response;
      },
      error => {
        console.log(error);
        // if error navigate to not found page
        this._route.navigate(["/not-found"]);
        this.details = {};
      },
      () => {
        //   after data is fetched hide the spinner(loading animation)
        this.loaderVisible = false;
      }
    );
  }

  goBack() {
    this._location.back();
  }
}
