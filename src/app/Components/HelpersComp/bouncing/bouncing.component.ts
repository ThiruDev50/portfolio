import { Component, Input } from '@angular/core';
import { SkillsInterface } from '../../../Helpers/Interface/Interface';

@Component({
  selector: 'app-bouncing',
  templateUrl: './bouncing.component.html',
  styleUrl: './bouncing.component.scss'
})
export class BouncingComponent {
  @Input() skill: SkillsInterface | undefined;
}
