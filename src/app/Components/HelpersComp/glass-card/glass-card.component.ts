import { Component, Input, SimpleChanges } from '@angular/core';
import { AcheivementsInterface } from '../../../Elements/Interface/Interface';
import * as AOS from 'aos';
@Component({
  selector: 'app-glass-card',
  templateUrl: './glass-card.component.html',
  styleUrl: './glass-card.component.scss',
})
export class GlassCardComponent {
  @Input() cardList: AcheivementsInterface[] = [];

  firstCard: AcheivementsInterface | undefined;
  secondCard: AcheivementsInterface | undefined;
  thirdCard: AcheivementsInterface | undefined;
  ngOnInit() {
    this.resetCards();
    this.setCards();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardList']) {
      this.resetCards();
      setTimeout(() => {
        this.setCards();
      }, 100);
    }
  }

  public resetCards() {
    this.firstCard = undefined;
    this.secondCard = undefined;
    this.thirdCard = undefined;
  }
  public setCards() {
    if (this.cardList.length > 0) {
      this.firstCard = this.cardList[0];
    }
    if (this.cardList.length > 1) {
      this.secondCard = this.cardList[1];
    }
    if (this.cardList.length > 2) {
      this.thirdCard = this.cardList[2];
    }
  }
}
