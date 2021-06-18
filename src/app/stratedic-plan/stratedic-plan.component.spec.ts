import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratedicPlanComponent } from './stratedic-plan.component';

describe('StratedicPlanComponent', () => {
  let component: StratedicPlanComponent;
  let fixture: ComponentFixture<StratedicPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratedicPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratedicPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
