import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  @ViewChild('underline') underline!: ElementRef;

  selectedTabIndex: number = 0; // Initially selecting the first tab
  tabs: any[] = [
    {
      name: "Expense planner",
      imageurl: "assets/Phone front.png",
    },
    {
      name: "TechChat",
      imageurl: "assets/iphone.png",
    },
    {
      name: "Cypher Store",
      imageurl: "assets/phone back.png",
    },
  ];
  // Function to set the selected tab
  selectTab(index: number) {
    this.selectedTabIndex = index;
    const liElement = this.underline.nativeElement.parentElement;
    this.underline.nativeElement.style.width = `${liElement.offsetWidth}px`;
  }
  ngOnInit(): void {
    Aos.init();
  }
}