import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "category",
  pure: false
})
export class CategoryPipe implements PipeTransform {
  transform(value: any, type: string): any {
    if (type === "house") return value.filter(v => v.type === "house");
    if (type === "character") return value.filter(v => v.type === "character");
    if (type === "book") return value.filter(v => v.type === "book");

    return value;
  }
}
