import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalEduComponent } from './vocational-edu.component';

describe('VocationalEduComponent', () => {
  let component: VocationalEduComponent;
  let fixture: ComponentFixture<VocationalEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocationalEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocationalEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
