import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeltaPage } from './delta.page';

describe('DeltaPage', () => {
  let component: DeltaPage;
  let fixture: ComponentFixture<DeltaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
