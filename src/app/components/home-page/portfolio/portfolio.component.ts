import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import * as Aos from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  isActive: boolean = false; 
  loading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading= false;
    },3000);
    Aos.init();
  }
  toggleMenu() {
    this.isActive = !this.isActive;
  }
  private scrollThreshold = 0;
  changeColor = false;
  constructor(private viewportScroller: ViewportScroller) { }

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.scrollThreshold) {
      this.changeColor = true; // Change to the desired color
    } else {
      this.changeColor = false; // Reset to transparent
    }
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
  
    if (element) {
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }
}
