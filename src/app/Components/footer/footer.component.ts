import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Output() authorNameClickedEvent= new EventEmitter<boolean>();
  authorNameClicked(){
    this.authorNameClickedEvent.emit(true);
  }
}
