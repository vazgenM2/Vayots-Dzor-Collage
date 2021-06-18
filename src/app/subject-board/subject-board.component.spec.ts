import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBoardComponent } from './subject-board.component';

describe('SubjectBoardComponent', () => {
  let component: SubjectBoardComponent;
  let fixture: ComponentFixture<SubjectBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
