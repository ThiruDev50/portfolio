import { Component } from '@angular/core';
import { visitTaleData } from '../../Helpers/Constants/Constants';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  quote:string=""
  quotesList:string[]=[]
  constructor(){
    this.quotesList=visitTaleData
    this.setRandomQuote();
  }
  public setRandomQuote(){
    this.quote=this.getRandomQuote();
  }
  public getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotesList.length);
    return this.quotesList[randomIndex];
  }
}
