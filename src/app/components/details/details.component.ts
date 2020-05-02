import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { DetailsHttpService } from "../../services/details-http.service";

import { isObservable, forkJoin } from 'rxjs';

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
  ) { }

  ngOnInit() {
    // get all parameters
    this.request = {
      type: this._activatedRoute.snapshot.params["type"],
      id: +this._activatedRoute.snapshot.params["id"]
    };
    // send parameters to service to get full details
    this._detailsHttp.getDetail(this.request).subscribe(
      (response) => {
        // this.details = response;

        this.details = Object.keys(response).reduce((p, c) => {

          if (c === 'url' || !response[c] || (Array.isArray(response[c]) && (response[c].length == 0 || (response[c].length && !response[c][0])))) { return p; }

          if (Array.isArray(response[c]) && response[c][0].includes('https')) {
            return Object.assign(p,
              {
                [c]: forkJoin(response[c].map(t => this._detailsHttp.getDetail2(t)))
              })
          }

          if (`${response[c]}`.includes('https')) {
            return Object.assign(p,
              {
                [c]: forkJoin([this._detailsHttp.getDetail2(response[c])])
              })
          }

          return Object.assign(p, { [c]: response[c] })

        }, {});
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

  checkIfObservable(detail) {
    return isObservable(detail)
  }
  getResult = obs => {
    return obs && obs.length ? obs.map(o => o.name).filter(a => a) : ''
  }
  getDate = date => new Date(date);

  isDate = date => isNaN(date) && !isNaN(Date.parse(date));

  goBack(): void {
    this._location.back();
  }
}
