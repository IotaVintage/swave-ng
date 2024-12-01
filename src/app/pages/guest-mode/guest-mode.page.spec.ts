import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestModePage } from './guest-mode.page';

describe('GuestModePage', () => {
  let component: GuestModePage;
  let fixture: ComponentFixture<GuestModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
