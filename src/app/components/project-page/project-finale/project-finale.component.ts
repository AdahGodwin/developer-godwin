import { Component } from '@angular/core';
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-finale',
  templateUrl: './project-finale.component.html',
  styleUrls: ['./project-finale.component.scss']
})
export class ProjectFinaleComponent {
faArrowRight = faArrowRightLong;
faArrowLeft = faArrowLeftLong;
}
