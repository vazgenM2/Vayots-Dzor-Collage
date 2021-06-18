import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchWorksComponent } from './research-works.component';

describe('ResearchWorksComponent', () => {
  let component: ResearchWorksComponent;
  let fixture: ComponentFixture<ResearchWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
