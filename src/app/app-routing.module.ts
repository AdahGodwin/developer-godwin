import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelObjectComponent } from './components/home-page/model-object/model-object.component';
import { PortfolioComponent } from './components/home-page/portfolio/portfolio.component';
import { ProjectDisplayComponent } from './components/project-page/project-display/project-display.component';

const routes: Routes = [
  {path: "home", component: PortfolioComponent},
  {path: "project", component: ProjectDisplayComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
