import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searched",
  pure: false
})
export class SearchedPipe implements PipeTransform {
  transform(value: any, enteredText: string, source: string): any {
    if (enteredText === "" && source === "results") return value;

    if (!enteredText) return;

    if (enteredText.length < 2) return null;

    return value.filter(fetched =>
      fetched.name.match(new RegExp(enteredText, "gi"))
    );
  }
}
