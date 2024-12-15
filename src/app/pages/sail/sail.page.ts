import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-sail',
  templateUrl: './sail.page.html',
  styleUrls: ['./sail.page.scss'],
})
export class SailPage implements OnInit {
  posts: any[] = []; // Array to store posts
  isLoading: boolean = true; // Loading state
  errorMessage: string | null = null; // Error message state

  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  // Fetch posts from the PostsService
  fetchPosts() {
    this.isLoading = true; // Start loading
    this.errorMessage = null; // Reset error state

    this.postsService.getAllPosts().subscribe(
      (data: any[]) => {
        this.posts = data;
        this.isLoading = false; // Stop loading once data is fetched
        console.log('Posts fetched successfully:', this.posts);
      },
      (error: any) => {
        this.errorMessage = 'Failed to fetch posts. Please try again.';
        this.isLoading = false; // Stop loading on error
        console.error('Error fetching posts:', error);
      }
    );
  }

  // Like a post
  likePost(post: any) {
    post.likeCount++;
    console.log(`Post liked: ${post.content} | Total Likes: ${post.likeCount}`);
  }

  // Add a comment to a post
  commentPost(post: any) {
    post.commentCount++;
    console.log(`Comment added to: ${post.content} | Total Comments: ${post.commentCount}`);
  }
}
