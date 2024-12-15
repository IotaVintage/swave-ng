import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-account-preview',
  templateUrl: './account-preview.page.html',
  styleUrls: ['./account-preview.page.scss'],
})
export class AccountPreviewPage {
  userDetails: any;
  
  constructor(private location: Location) {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  }

  returnToPrevious() {
    this.location.back();
  }
}
