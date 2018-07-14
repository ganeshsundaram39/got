import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cleanDetails"
})
export class CleanDetailsPipe implements PipeTransform {
  transform(value: any): any {
    let cleanDetails = {};
    // loop through values
    for (let key in value) {
      // check if value is array
      if (Array.isArray(value[key])) {
        //   if its empty array then continue dont append to new object
        if (value[key][0] == "" || value[key].length == 0) continue;
        // append to new object
        cleanDetails[key] = value[key];
      } else {
        // if  value is empty continue dont append to new object
        if (!value[key]) continue;
        // append to new object
        cleanDetails[key] = value[key];
      }
    }
    return cleanDetails;
  }
}
