import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhilosophiesPage } from './philosophies.page';

describe('PhilosophiesPage', () => {
  let component: PhilosophiesPage;
  let fixture: ComponentFixture<PhilosophiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilosophiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
