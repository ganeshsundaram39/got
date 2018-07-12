import { Pipe, PipeTransform } from "@angular/core";
import { getId, getType } from "../shared";
import { MultipleHttpService } from "../services/multiple-http.service";

@Pipe({
  name: "urlTransform"
})
export class UrlTransformPipe implements PipeTransform {
  constructor(private multiple: MultipleHttpService) {}
  transform(value: any): any {
    if (Array.isArray(value)) {
      if (!new RegExp("https", "gi").test(value[0])) return value;

      value = value.map(v => {
        return { type: getType(v), id: getId(v) };
      });

      this.multiple.getData(value).subscribe(v => {
        console.log(v);
      });
      return null;
    }
    return value;
  }
}
