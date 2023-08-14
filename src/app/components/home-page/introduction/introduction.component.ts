import { Component, OnInit, HostListener, ElementRef} from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  
  ngOnInit(): void {
    Aos.init();
  }
  private parallaxImage!: HTMLElement;
  
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.parallaxImage = this.elementRef.nativeElement.querySelector('.background-img');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.parallaxImage.style.transform = `translateY(-${scrollTop * 0.5}px)`;
  }
}
