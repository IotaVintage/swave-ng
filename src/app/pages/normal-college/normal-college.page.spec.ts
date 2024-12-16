import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NormalCollegePage } from './normal-college.page';

describe('NormalCollegePage', () => {
  let component: NormalCollegePage;
  let fixture: ComponentFixture<NormalCollegePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCollegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
