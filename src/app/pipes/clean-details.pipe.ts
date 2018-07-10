import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cleanDetails"
})
export class CleanDetailsPipe implements PipeTransform {
  cleanResults(response: {}) {}
  transform(value: any, args?: any): any {
    let cleanDetails = {};
    for (let key in value) {
      if (!value.hasOwnProperty(key)) continue;
      if (Array.isArray(value[key])) {
        if (value[key][0] == "" || value[key].length == 0) continue;
        cleanDetails[key] = value[key];
      } else {
        if (!value[key]) continue;
        cleanDetails[key] = value[key];
      }
    }
    return cleanDetails;
  }
}
