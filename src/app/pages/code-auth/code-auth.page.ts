import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-code-auth',
  templateUrl: './code-auth.page.html',
  styleUrls: ['./code-auth.page.scss'],
})
export class CodeAuthPage implements OnInit {

  constructor(private location: Location) { }

  returnToPrevious() {
    this.location.back();
  }
  
  ngOnInit() {
  }

  otp: string = '';

  verifyOtp() {
    // Combine OTP input values and validate
    console.log('OTP Entered:', this.otp);
  }

  resendOtp() {
    // Logic to resend OTP
    console.log('Resend OTP');
  }

}
