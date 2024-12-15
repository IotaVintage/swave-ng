import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Login
  login(data: { unpID: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // Search user
  searchUser(unpID: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search-user/${unpID}`);
  }

  // Send verification OTP
  sendVerificationOtp(data: { unpID: string; email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-verification-otp`, data);
  }

  // Verify OTP
  verifyOtp(data: { unpID: string; otp: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-verification-otp`, data);
  }

  // Account setup
  accountSetup(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/account-setup`, data);
  }

  // Fetch profile info
  fetchProfile(unpID: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/${unpID}`);
  }

  // Search accounts
  searchAccounts(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search-accounts`, { params: { query } });
  }

  // Update bio
  updateBio(data: { unpID: string; bio: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/update-bio`, data);
  }
}
