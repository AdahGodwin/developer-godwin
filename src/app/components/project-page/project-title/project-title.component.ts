import { Component, OnInit } from '@angular/core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import * as Aos from 'aos';

@Component({
  selector: 'app-project-title',
  templateUrl: './project-title.component.html',
  styleUrls: ['./project-title.component.scss']
})
export class ProjectTitleComponent {
  faArrow = faArrowRightLong;
  ngOnInit(): void {
    Aos.init();
  }
}
