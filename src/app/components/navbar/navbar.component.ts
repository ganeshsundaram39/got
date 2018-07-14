import {
  Component,
  OnInit,
  ViewChild,
  Input,
  EventEmitter,
  Output
} from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() searchedText: string;
  public toggleSubNav: boolean = false;
  public categories: string[] = ["All", "House", "Character", "Book"];
  public categorySelected: string = "All";
  @Output() categorySelecting = new EventEmitter<string>();
  @Output() enteringText = new EventEmitter<string>();
  @ViewChild("searchForm") searchForm: NgForm;
  constructor() {}

  ngOnInit() {}
  userEnteringText() {
    // emit the entered text by user
    this.enteringText.emit(this.searchedText);
  }

  userSelectingCategory() {
    // emit the selected category by user
    this.categorySelecting.emit(this.categorySelected);
  }
  onSubmit() {}
}
