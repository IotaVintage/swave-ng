import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Base URL
  private baseUrl = 'http://localhost:3000/post';

  constructor(private http: HttpClient) { }

  // Method to fetch all posts
  getAllPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-posts`);
  }
}
