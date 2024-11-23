import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-shark-id',
  templateUrl: './shark-id.page.html',
  styleUrls: ['./shark-id.page.scss'],
})
export class SharkIdPage  {

  constructor(private location: Location) { }

  returnToPrevious() {
    this.location.back();
  }



}
