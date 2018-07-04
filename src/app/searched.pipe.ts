import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searched"
})
export class SearchedPipe implements PipeTransform {
  transform(value: any, enteredText: string): any {
    if (enteredText.length < 2) return null;

    return value
      .filter(fetched => fetched.name.match(new RegExp(enteredText, "gi")))
      .slice(0, 10);
  }
}
