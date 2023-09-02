import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpertiseSectionComponent } from './components/home-page/expertise-section/expertise-section.component';
import { ProjectsComponent } from './components/home-page/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { ContactComponent } from './components/home-page/contact/contact.component';
import { IntroductionComponent } from './components/home-page/introduction/introduction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModelObjectComponent } from './components/home-page/model-object/model-object.component';
import { PortfolioComponent } from './components/home-page/portfolio/portfolio.component';
import { FadeInAnimationDirective } from './directives/fade-in-animation.directive';
import { ProjectDisplayComponent } from './components/project-page/project-display/project-display.component';
import { ProjectTitleComponent } from './components/project-page/project-title/project-title.component';
import { ProjectImagesComponent } from './components/project-page/project-images/project-images.component';
import { ProjectFinaleComponent } from './components/project-page/project-finale/project-finale.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpertiseSectionComponent,
    ProjectsComponent,
    ContactComponent,
    IntroductionComponent,
    ModelObjectComponent,
    PortfolioComponent,
    FadeInAnimationDirective,
    ProjectDisplayComponent,
    ProjectTitleComponent,
    ProjectImagesComponent,
    ProjectFinaleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
