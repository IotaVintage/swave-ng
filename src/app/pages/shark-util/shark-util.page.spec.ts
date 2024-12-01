import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharkUtilPage } from './shark-util.page';

describe('SharkUtilPage', () => {
  let component: SharkUtilPage;
  let fixture: ComponentFixture<SharkUtilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SharkUtilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
