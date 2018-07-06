import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "name"
})
export class NamePipe implements PipeTransform {
  transform(value: any): any {
    if (!value) return "N / A";

    if (new RegExp("house ", "gi").test(value))
      return value.replace(new RegExp("house ", "gi"), "");

    return value;
  }
}
