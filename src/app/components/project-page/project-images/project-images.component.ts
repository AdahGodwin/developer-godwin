import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.scss']
})
export class ProjectImagesComponent {
  ngOnInit(): void {
    Aos.init();
  }
}
