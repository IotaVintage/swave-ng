import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountPreviewPage } from './account-preview.page';

describe('AccountPreviewPage', () => {
  let component: AccountPreviewPage;
  let fixture: ComponentFixture<AccountPreviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
