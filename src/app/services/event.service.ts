import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  // Base URL
  private baseUrl = 'http://localhost:3000/event';

  constructor(private http: HttpClient) { }

  // Method to fetch all posts
  getAllEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-events`);
  }

  // Method to fetch todays event
  getTodayEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-today-events`);
  }

  // Method to fetch this month event
  getMonthEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-today-events`);
  }

  // Method to fetch all posts
  createEvent(): Observable<any> {
    return this.http.get(`${this.baseUrl}/create-event`);
  }

  // Method to fetch all posts
  updateEvent(unpID: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/update-event/${unpID}`);
  }

  deleteEvent(unpID: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/delete-event/${unpID}`);
  }
}
