import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searched",
  pure: false
})
export class SearchedPipe implements PipeTransform {
  transform(value: any, enteredText: string, source: string): any {
    //   if pipe is used in results component and user has not entered anything return all data
    if (enteredText === "" && source === "results") return value;

    // else  from different component if entered nothing return nothing
    if (!enteredText) return;

    // if length is less than 2 return none
    if (enteredText.length < 2) return null;

    // filter searched
    return value.filter(fetched =>
      fetched.name.match(new RegExp(enteredText, "gi"))
    );
  }
}
