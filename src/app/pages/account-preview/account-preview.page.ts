import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-account-preview',
  templateUrl: './account-preview.page.html',
  styleUrls: ['./account-preview.page.scss'],
})
export class AccountPreviewPage {
  
  constructor(private location: Location) { }

  returnToPrevious() {
    this.location.back();
  }

}
