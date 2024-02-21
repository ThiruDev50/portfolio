import { Component } from '@angular/core';
import { AcheivementsInterface } from '../../Helpers/Interface/Interface';
import { acheivementsData } from '../../Helpers/Constants/Constants';
@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrl: './contributions.component.scss'
})
export class ContributionsComponent {
  acheivementsData : AcheivementsInterface[]= acheivementsData;
  visibleCards: AcheivementsInterface[] = [];
  currentIndex = 0;
  cardsToShow = 3;
  rightContent=true
  leftContent=true
  ngOnInit() {
    this.showVisibleCards();
    
  }

  showVisibleCards() {
    this.visibleCards = this.acheivementsData.slice(this.currentIndex, this.currentIndex + this.cardsToShow);
  }
  rightBtnClicked() {
  
    this.currentIndex += this.cardsToShow;
    if (this.currentIndex >= this.acheivementsData.length) {
      this.currentIndex = 0;
    }
    this.showVisibleCards();
    
  }

  leftBtnCLicked() {
   
    this.currentIndex -= this.cardsToShow;
    if (this.currentIndex < 0) {
      this.currentIndex = Math.max(0, this.acheivementsData.length - this.cardsToShow);
    }
    this.showVisibleCards();
  }

}
