import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverCardsComponent } from './hover-cards.component';

describe('HoverCardsComponent', () => {
  let component: HoverCardsComponent;
  let fixture: ComponentFixture<HoverCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoverCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoverCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
