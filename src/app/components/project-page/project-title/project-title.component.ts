import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() github: string = "";
  
  faArrow = faArrowRightLong;

  // @Output() showpage = new EventEmitter<boolean>();
  // showButton = true;
  // showProject() {
  //   this.showpage.emit(true);
  //   this.showButton = false;
  //   Aos.init();
  // }

  ngOnInit(): void {
    Aos.init();
  }
}
