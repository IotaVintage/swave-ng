import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.page.html',
  styleUrls: ['./account-setup.page.scss'],
})
export class AccountSetupPage  {
sex: any;

  constructor(private location: Location) { }

  returnToPrevious() {
    this.location.back();
  }

}
