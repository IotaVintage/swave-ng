import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeAuthPage } from './code-auth.page';

describe('CodeAuthPage', () => {
  let component: CodeAuthPage;
  let fixture: ComponentFixture<CodeAuthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
