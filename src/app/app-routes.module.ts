import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./components/search/search.component";
import { DetailsComponent } from "./components/details/details.component";
import { ResultsComponent } from "./components/results/results.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "", component: SearchComponent, pathMatch: "full" },
  { path: "results", component: ResultsComponent },
  { path: "details/:type/:id", component: DetailsComponent },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "not-found" }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesModule {}
