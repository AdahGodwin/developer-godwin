import { Component,HostListener, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/shared/project';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.scss']
})
export class ProjectDisplayComponent {
  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }
  project!: Project;
  show: boolean = false;
  
  showprojectPage(value: boolean) {
    this.show = value;
    console.log(this.show);
  }
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.project = this.projectService.getProject(routeParams["id"]);
      });

  }
  isActive: boolean = false; 
  showMenu() {
    this.isActive = !this.isActive;
  }
  private scrollThreshold = 0;
  changeColor = false;

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.scrollThreshold) {
      this.changeColor = true; // Change to the desired color
    } else {
      this.changeColor = false; // Reset to transparent
    }
  }
}
