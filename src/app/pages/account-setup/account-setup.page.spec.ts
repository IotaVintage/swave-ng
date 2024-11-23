import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountSetupPage } from './account-setup.page';

describe('AccountSetupPage', () => {
  let component: AccountSetupPage;
  let fixture: ComponentFixture<AccountSetupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
