import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SailPage } from './sail.page';

describe('SailPage', () => {
  let component: SailPage;
  let fixture: ComponentFixture<SailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
