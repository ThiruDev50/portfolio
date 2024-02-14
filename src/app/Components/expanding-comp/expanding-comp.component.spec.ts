import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingCompComponent } from './expanding-comp.component';

describe('ExpandingCompComponent', () => {
  let component: ExpandingCompComponent;
  let fixture: ComponentFixture<ExpandingCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandingCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
