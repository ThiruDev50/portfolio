import { Component, ElementRef, ViewChild } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  @ViewChild('home') homeSection!: ElementRef;
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('services') servicesSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('project') projectSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;
  ngAfterViewInit(): void {
    // At this point, the ViewChild properties should be initialized
   
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    })
    
  }


  scrollToComponent(section: string): void {
    let targetElement: ElementRef | undefined;
  
    switch (section) {
      case 'home':
        targetElement = this.homeSection;
        break;
      case 'about':
        targetElement = this.aboutSection;
        break;
      case 'services':
        targetElement = this.servicesSection;
        break;
      case 'skills':
        targetElement = this.skillsSection;
        break;
      case 'project':
        targetElement = this.projectSection;
        break;
      case 'contact':
        targetElement = this.contactSection;
        break;
    }
    if (targetElement && targetElement.nativeElement) {
    
      targetElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
  }
}
