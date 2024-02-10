import { Component } from '@angular/core';
import { SkillsInterface } from '../../Elements/Interface/Interface';
import { skillsData } from '../../Helpers/Constants/Constants';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsList: SkillsInterface[] = skillsData;

}
