import { Component } from '@angular/core';
import { ProjectInterface } from '../../Elements/Interface/Interface';
import { projectData } from '../../Helpers/Constants/Constants';

@Component({
  selector: 'app-expanding-comp',
  templateUrl: './expanding-comp.component.html',
  styleUrl: './expanding-comp.component.scss',
})
export class ExpandingCompComponent {
  activeCard: number | undefined;
  activeSubCard: number | undefined;
  initalCardIndex = 0;
  showingProjectsCount = 4;
  projectData: ProjectInterface[] = projectData;
  projectDisplayNameList: string[] = [];
  constructor() {
    this.setProjectData();
    this.setInitalCard();
  }
  setProjectData() {
    let randomInd = Math.floor(
      Math.random() * (this.showingProjectsCount + 1)
    );
    randomInd=0
    if (randomInd<this.showingProjectsCount){
      this.initalCardIndex=randomInd;
    }
  }
  setInitalCard() {
    this.activeCard = this.initalCardIndex;
    this.activeSubCard = this.initalCardIndex;
  }
  ngOnInit() {
    this.setData();
  }
  setData() {
    this.projectData.forEach((ele: ProjectInterface) => {
      this.projectDisplayNameList.push(ele.ProjectDisplayName);
    });
  }
  cardClicked(n: any) {
    this.activeCard = n;
    let curTitle = this.projectDisplayNameList[n];
    this.projectDisplayNameList[n] = '';
    setTimeout(() => {
      this.activeSubCard = this.activeCard;
      this.projectDisplayNameList[n] = curTitle;
    }, 500);
  }
}
