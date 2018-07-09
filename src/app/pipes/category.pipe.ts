import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "category"
})
export class CategoryPipe implements PipeTransform {
  transform(value: any, type: string): any {
    if (type === "House") return value.filter(v => v.type === "house");
    if (type === "Character") return value.filter(v => v.type === "character");
    if (type === "Book") return value.filter(v => v.type === "book");

    return value;
  }
}
