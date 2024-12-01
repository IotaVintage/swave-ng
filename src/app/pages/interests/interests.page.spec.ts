import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestsPage } from './interests.page';

describe('InterestsPage', () => {
  let component: InterestsPage;
  let fixture: ComponentFixture<InterestsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
