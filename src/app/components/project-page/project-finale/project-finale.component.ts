import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-finale',
  templateUrl: './project-finale.component.html',
  styleUrls: ['./project-finale.component.scss']
})
export class ProjectFinaleComponent {
  faArrowRight = faArrowRightLong;
  faArrowLeft = faArrowLeftLong;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {

  }
  nextProject: any;
  previousProject: any;

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.nextProject = this.projectService.getNextProject(routeParams["id"]);
      this.previousProject = this.projectService.getPrevProject(routeParams["id"]);
    });


  }
}
