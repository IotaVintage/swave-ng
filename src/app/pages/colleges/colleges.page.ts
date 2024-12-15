import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.page.html',
  styleUrls: ['./colleges.page.scss'],
})
export class CollegesPage {

  constructor(private location: Location) { }

  returnToPrevious() {
    this.location.back();
  }


}
