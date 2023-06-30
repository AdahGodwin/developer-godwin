import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpertiseSectionComponent } from './components/expertise-section/expertise-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { ContactComponent } from './components/contact/contact.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModelObjectComponent } from './components/model-object/model-object.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpertiseSectionComponent,
    ProjectsComponent,
    ContactComponent,
    IntroductionComponent,
    ModelObjectComponent,
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
