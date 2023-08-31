import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/shared/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  
})

export class ProjectsComponent implements OnInit {
  @ViewChild('underline') underline!: ElementRef;
  constructor(private projectService: ProjectService) {}
  selectedTabIndex: number = 0; // Initially selecting the first tab
  projects: Project[] = [];

  
  // Function to set the selected tab
  selectTab(index: number) {
    this.selectedTabIndex = index;
    }
  ngOnInit(): void {
    Aos.init();
    this.projects = this.projectService.getProjects();
   
  }
}