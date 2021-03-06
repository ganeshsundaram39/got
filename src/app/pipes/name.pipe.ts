import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "name"
})
export class NamePipe implements PipeTransform {
  transform(value: any): any {
    // if empty return N/a
    if (!value) return "N / A";

    // if house string is found replace with none
    if (new RegExp("house ", "gi").test(value))
      return value.replace(new RegExp("house ", "gi"), "");

    return value;
  }
}
