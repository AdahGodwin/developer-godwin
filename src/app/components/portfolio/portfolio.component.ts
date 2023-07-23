import { Component } from '@angular/core';

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
}
