import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-interests',
  templateUrl: './interests.page.html',
  styleUrls: ['./interests.page.scss'],
})
export class InterestsPage  {

  constructor(private location: Location) { }

  returnToPrevious() {
    this.location.back();
  }

  interests = [
    { label: 'News', value: 'News', isFilled: false },
    { label: 'Sports', value: 'Sports', isFilled: false },
    { label: 'Dance', value: 'Dance', isFilled: false },
    { label: 'History', value: 'History', isFilled: false },
    { label: 'Technology', value: 'Technology', isFilled: false },
    { label: 'Arts & Design', value: 'Arts&Design', isFilled: false },
    { label: 'Automotive', value: 'Automotive', isFilled: false },
    { label: 'Institutional Services', value: 'Institutional Services', isFilled: false },
    { label: 'Reading', value: 'Reading', isFilled: false },
    { label: 'Drawing', value: 'Drawing', isFilled: false },
    { label: 'Legal Matters', value: 'Legal Matters', isFilled: false },
  ];

  // Array to store selected interest values
  selectedInterests: string[] = [];

  toggleFill(index: number) {
    const button = this.interests[index];
    button.isFilled = !button.isFilled;


    if (button.isFilled) {
      this.selectedInterests.push(button.value);
    } else {
      this.selectedInterests = this.selectedInterests.filter(value => value !== button.value);
    }
  }



}
