import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  // animations: [
  //   trigger('filterAnimation', [
  //     transition(':enter, * => 0, * => -1', []),
  //     transition(':increment', [
  //       query(':enter', [
  //         style({ opacity: 0, width: 0 }),
  //         stagger(50, [
  //           animate('300ms ease-out', style({ opacity: 1, width: '*' })),
  //         ]),
  //       ], { optional: true })
  //     ]),
  //     transition(':decrement', [
  //       query(':leave', [
  //         stagger(50, [
  //           animate('300ms ease-out', style({ opacity: 0, width: 0 })),
  //         ]),
  //       ])
  //     ]),
  //   ])
  // ]
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
      imageurl: "assets/Phone front.png",
    },
    {
      name: "Cypher Store",
      imageurl: "assets/Phone front.png",
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