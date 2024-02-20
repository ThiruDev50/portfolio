import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import exp from 'node:constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  expStartDate:Date=new Date('2021-08-12');
  errorExpPlaceHolder:string=" immersed in the dynamic realm of IT. ";
  successExpPlaceHolder:string=" with an overall industry experience of ";
  expPlaceHolder:string=""
  ngOnInit(){
    let dateDiff=this.calculateDateDifference(this.expStartDate);
    if(dateDiff?.years){
      let expText= this.successExpPlaceHolder + dateDiff.years + " years ";
      if(dateDiff?.months!==0){
        expText+="and "+ dateDiff?.months+ " months";
      }
      this.expPlaceHolder=expText;
    }
    else{
      this.expPlaceHolder=this.errorExpPlaceHolder;
    }
  }


  public calculateDateDifference(inputDateTime: Date): any {
    try{
      const currentDate = new Date();
      const inputDate = new Date(inputDateTime);
    
      // Calculate the difference in milliseconds
      const timeDifference = currentDate.getTime() - inputDate.getTime();
    
      // Convert the difference to years and months
      const yearsDifference = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
      const monthsDifference = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    
      return { years: yearsDifference, months: monthsDifference };
    }
    catch{
      return{}
    }
   
  }
}
