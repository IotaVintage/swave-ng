import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollegesPage } from './colleges.page';

describe('CollegesPage', () => {
  let component: CollegesPage;
  let fixture: ComponentFixture<CollegesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
