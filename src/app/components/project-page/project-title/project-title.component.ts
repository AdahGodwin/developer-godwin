import { Component } from '@angular/core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-project-title',
  templateUrl: './project-title.component.html',
  styleUrls: ['./project-title.component.scss']
})
export class ProjectTitleComponent {
  faArrow = faArrowRightLong;
}
