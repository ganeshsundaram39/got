import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) return;
    // sort in ascending order
    return value.sort((a, b) => a.name.localeCompare(b.name));
  }
}
