import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchedHighlight"
})
export class SearchedHighlightPipe implements PipeTransform {
  transform(value: any, enteredText: string): any {
    //   hightlight searched text from user by replacing it with span with a css class
    return value.replace(
      new RegExp(enteredText, "gi"),
      `<span class="searched__highlight">${enteredText}</span>`
    );
  }
}
