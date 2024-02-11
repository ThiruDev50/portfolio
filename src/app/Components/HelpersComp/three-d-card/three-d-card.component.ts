import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-three-d-card',
  templateUrl: './three-d-card.component.html',
  styleUrl: './three-d-card.component.scss',
})
export class ThreeDCardComponent {
  @Input() quote: string = '';
  defaultQuote =
    "Always have a backup. Here is 'why'. Due to some unknown issue this default value is rendering instead of breaking this component.";
  showQuote: boolean = true;
  currentQuote: string = '';
  ngOnInit() {
    this.currentQuote = this.quote;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quote']) {
      this.showQuote = false;
      this.currentQuote = this.quote;
      setTimeout(() => {
        this.showQuote = true;
      }, 100);
    }
  }
}
