import { Component } from '@angular/core';
declare var Typed: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngOnInit(): void {
    var typing = new Typed('.full-stack', {
      strings: [
        '',
        'Full Stack Developer!',
        'Web Developer!',
        'Mobile Apps Developer!'
      ],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });
  }
}
