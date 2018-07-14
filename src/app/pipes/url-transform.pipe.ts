import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "urlTransform"
})
export class UrlTransformPipe implements PipeTransform {
  transform(value: any): any {
    // check if  its array
    if (Array.isArray(value)) {
      // if array is not urls then return
      if (!new RegExp("https", "gi").test(value[0])) return value;

      // else  map them  and put them inside divs
      value = value
        .map(v => {
          return `<div class="url">${v}</div>`;
        })
        .join("");
      return value;
    }
    return value;
  }
}
