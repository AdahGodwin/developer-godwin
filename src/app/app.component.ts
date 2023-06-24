import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'developer-godwin';

  isActive: boolean = false; 
  
  showMenu() {
    this.isActive = !this.isActive;
  }
}
