import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideOnScroll]'
})
export class HideOnScrollDirective {
  private lastScrollTop = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > this.lastScrollTop) {
      // Scrolling down, hide the navbar
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-100%)');
    } else {
      // Scrolling up, show the navbar
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
    }

    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
