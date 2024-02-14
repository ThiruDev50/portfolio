import { Component } from '@angular/core';
import { ProjectInterface } from '../../Elements/Interface/Interface';
import { projectData } from '../../Helpers/Constants/Constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  allProjectsList:ProjectInterface[]=projectData;
  topProjectList:ProjectInterface[]=[]
  topProjectsCount:number=3
  ngOnInit(){
    this.topProjectList=this.allProjectsList.slice(0,this.topProjectsCount)
    console.log(this.topProjectList)
  }
}
