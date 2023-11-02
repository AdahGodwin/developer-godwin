import { Component, OnInit,Input } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.scss']
})
export class ProjectImagesComponent {
  @Input() coverImg: string = "";
  @Input() homeImg: string = "";
  @Input() imageposter:string = "";
  @Input() shortIntro: string = "";
  @Input() challenge: string = "";
  @Input() name: string = "";
  @Input() scope: string = "";
  @Input() designRationale: string = "";
  @Input() baseColor: string = "";

  ngOnInit(): void {
    Aos.init();
  }
}