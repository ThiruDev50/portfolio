import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDCardComponent } from './three-d-card.component';

describe('ThreeDCardComponent', () => {
  let component: ThreeDCardComponent;
  let fixture: ComponentFixture<ThreeDCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeDCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeDCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
