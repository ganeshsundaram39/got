import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchedHighlight"
})
export class SearchedHighlightPipe implements PipeTransform {
  transform(value: any, enteredText: string): any {
    return value.replace(
      new RegExp(enteredText, "gi"),
      `<span _ngcontent-c1 class="searched__highlight">${enteredText}</span>`
    );
  }
}
