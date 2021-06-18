import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncollegeLifeComponent } from './incollege-life.component';

describe('IncollegeLifeComponent', () => {
  let component: IncollegeLifeComponent;
  let fixture: ComponentFixture<IncollegeLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncollegeLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncollegeLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
