import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/shared/project';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.scss']
})
export class ProjectDisplayComponent {
  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}
   project!: Project;
  projectId!: string;
  ngOnInit(): void {
   this.projectId = this.route.snapshot.params["id"];
  console.log(this.projectId);
      
   this.project = this.project = this.projectService.getProject(this.projectId);
    }
}
