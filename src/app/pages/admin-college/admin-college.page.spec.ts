import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCollegePage } from './admin-college.page';

describe('AdminCollegePage', () => {
  let component: AdminCollegePage;
  let fixture: ComponentFixture<AdminCollegePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCollegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
