import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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

  constructor(
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
    private _detailsHttp: DetailsHttpService
  ) {}

  ngOnInit() {
    this.request = {
      type: this._activatedRoute.snapshot.params["type"],
      id: +this._activatedRoute.snapshot.params["id"]
    };

    this._detailsHttp.getDetails(this.request).subscribe(
      response => {
        this.details = response;
        console.log(this.details);
      },
      error => {
        console.log(error);
        this.details = {};
      }
    );
  }

  goBack() {
    this._location.back();
  }
}
