import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  
})

export class ProjectsComponent implements OnInit {
  @ViewChild('underline') underline!: ElementRef;

  selectedTabIndex: number = 0; // Initially selecting the first tab
  tabs: any[] = [
    {
      name: "Expense planner",
      imageurl: "assets/epx.png",
    },
    {
      name: "Tech Chat",
      imageurl: "assets/techchat.png",
    },
    {
      name: "Luxe Haven",
      imageurl: "assets/luxhaven.png",
    },
  ];
  // Function to set the selected tab
  selectTab(index: number) {
    this.selectedTabIndex = index;
    const liElement = this.underline.nativeElement.parentElement;
    }
  ngOnInit(): void {
    Aos.init();
  }
}