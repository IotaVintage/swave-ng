import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-auth',
  templateUrl: './code-auth.page.html',
  styleUrls: ['./code-auth.page.scss'],
})
export class CodeAuthPage  {
  
  constructor(private location: Location, private router: Router) { }

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
    console.log('OTP Entered:', this.otp);
    this.router.navigate(['/account-preview']);
  }

  resendOtp() {
    // Logic to resend OTP
    console.log('Resend OTP');
  }

}
