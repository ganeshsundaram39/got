import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { DetailsComponent } from "./details/details.component";
import { ResultsComponent } from "./results/results.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "", component: SearchComponent, pathMatch: "full" },
  { path: "results", component: ResultsComponent },
  { path: "details", component: DetailsComponent },
  {path:"not-found",component:PageNotFoundComponent}
  { path: "**", redirectTo:"not-found"}
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesModule {}
