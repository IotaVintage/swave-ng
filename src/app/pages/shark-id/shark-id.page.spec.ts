import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharkIdPage } from './shark-id.page';

describe('SharkIdPage', () => {
  let component: SharkIdPage;
  let fixture: ComponentFixture<SharkIdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SharkIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
