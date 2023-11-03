import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/shared/project';
import * as Aos from 'aos';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.scss']
})
export class ProjectDisplayComponent {
  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }
  project!: Project;
  loading = true;
  isActive: boolean = false;
  private scrollThreshold = 0;
  changeColor = false;

  ngOnInit(): void {
    
    this.route.params.subscribe(routeParams => {
      this.project = this.projectService.getProject(routeParams["id"]);
      setTimeout(() => {
        this.loading = false;
       
      }, 3000);
    });

  }
  showMenu() {
    this.isActive = !this.isActive;
  }
  
  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.scrollThreshold) {
      this.changeColor = true; 
    } else {
      this.changeColor = false;
    }
  }
}
