import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  isActive: boolean = false; 
  showMenu() {
    this.isActive = !this.isActive;
  }
  private scrollThreshold = 0;
  changeColor = false;

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.scrollThreshold) {
      this.changeColor = true; // Change to the desired color
    } else {
      this.changeColor = false; // Reset to transparent
    }
  }
}
