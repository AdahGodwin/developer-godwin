import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appFadeInAnimation]'
})
export class FadeInAnimationDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:load')
  startFadeInAnimation(): void {
    const element = this.elementRef.nativeElement;
    const distanceFromTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (distanceFromTop - windowHeight <= 0) {
      element.classList.add('fade-in');
    }
  }
}

