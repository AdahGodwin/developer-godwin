import { Component, OnInit, Input } from '@angular/core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import * as Aos from 'aos';

@Component({
  selector: 'app-project-title',
  templateUrl: './project-title.component.html',
  styleUrls: ['./project-title.component.scss']
})
export class ProjectTitleComponent {
  @Input() name: string = "";
  @Input() description: string = "";
  @Input()  type: string = "";
  @Input() client: string = "";
  @Input() language: string = "";
  
  faArrow = faArrowRightLong;
  ngOnInit(): void {
    Aos.init();
  }
}
