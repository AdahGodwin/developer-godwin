import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faServer, faMobileButton } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expertise-section',
  templateUrl: './expertise-section.component.html',
  styleUrls: ['./expertise-section.component.scss']
})
export class ExpertiseSectionComponent implements OnInit {

  faAngular = faAngular;
  faServer = faServer;
  faMobile = faMobileButton;  
  ngOnInit(): void {
    Aos.init();
  }
}
