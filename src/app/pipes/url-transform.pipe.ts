import { Pipe, PipeTransform } from "@angular/core";
import { getId, getType } from "../shared";

@Pipe({
  name: "urlTransform"
})
export class UrlTransformPipe implements PipeTransform {
  transform(value: any): any {
    if (Array.isArray(value)) {
      if (!new RegExp("https", "gi").test(value[0])) return value;

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
