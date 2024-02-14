import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../../Elements/Interface/Interface';

@Component({
  selector: 'app-hover-cards',
  templateUrl: './hover-cards.component.html',
  styleUrl: './hover-cards.component.scss'
})
export class HoverCardsComponent {
  @Input() project:ProjectInterface |undefined;
}
