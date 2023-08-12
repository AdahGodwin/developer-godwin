import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ModelObjectComponent } from './components/model-object/model-object.component';
// import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  // {path: "home", component: ModelObjectComponent},
  // {path: "portfolio", component: PortfolioComponent},
  // {path: "", redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
