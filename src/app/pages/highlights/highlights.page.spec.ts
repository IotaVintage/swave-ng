import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightsPage } from './highlights.page';

describe('HighlightsPage', () => {
  let component: HighlightsPage;
  let fixture: ComponentFixture<HighlightsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
