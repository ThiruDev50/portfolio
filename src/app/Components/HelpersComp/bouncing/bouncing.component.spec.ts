import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingComponent } from './bouncing.component';

describe('BouncingComponent', () => {
  let component: BouncingComponent;
  let fixture: ComponentFixture<BouncingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BouncingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BouncingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
