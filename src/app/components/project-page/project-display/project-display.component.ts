import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.scss']
})
export class ProjectDisplayComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  ngOnInit(): void {
    // this.viewportScroller.scrollToPosition([0, 0]);
      
  }
}
