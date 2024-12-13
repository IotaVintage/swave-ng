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
    { label: 'News', value: 'news', isFilled: false },
    { label: 'Sports', value: 'sports', isFilled: false },
    { label: 'Dance', value: 'dance', isFilled: false },
    { label: 'History', value: 'history', isFilled: false },
    { label: 'Technology', value: 'technology', isFilled: false },
    { label: 'Arts & Design', value: 'arts-design', isFilled: false },
    { label: 'Automotive', value: 'automotive', isFilled: false },
    { label: 'Institutional Services', value: 'institutional-services', isFilled: false },
    { label: 'Reading', value: 'reading', isFilled: false },
    { label: 'Drawing', value: 'drawing', isFilled: false },
    { label: 'Legal Matters', value: 'legal-matters', isFilled: false },
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
