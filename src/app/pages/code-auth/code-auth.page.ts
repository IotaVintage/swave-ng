import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-code-auth',
  templateUrl: './code-auth.page.html',
  styleUrls: ['./code-auth.page.scss'],
})
export class CodeAuthPage  {
  router: any;

  constructor(private location: Location) { }

  returnToPrevious() {
    this.location.back();
  }


  otp: string[] = ['', '', '', '', '', ''];

  // Function to move to the next input field
  moveToNext(event: any, nextInput: any): void {
    const value = event.target.value;
    if (value.length === 1 && nextInput) {
      nextInput.setFocus();
    }
  }

  verifyOtp() {
    // Combine OTP input values and validate

    // console.log('OTP Entered:', this.otp);
  }

  resendOtp() {
    // Logic to resend OTP
    console.log('Resend OTP');
  }

}
