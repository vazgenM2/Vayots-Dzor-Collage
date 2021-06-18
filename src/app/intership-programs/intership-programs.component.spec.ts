import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipProgramsComponent } from './intership-programs.component';

describe('IntershipProgramsComponent', () => {
  let component: IntershipProgramsComponent;
  let fixture: ComponentFixture<IntershipProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntershipProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
