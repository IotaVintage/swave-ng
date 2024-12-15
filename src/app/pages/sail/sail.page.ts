import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-sail',
  templateUrl: './sail.page.html',
  styleUrls: ['./sail.page.scss'],
})
export class SailPage implements OnInit {
  posts: any[] = []; // Array to store posts
  isLoading: boolean = true; // Loading state
  errorMessage: string | null = null; // Error message state

  constructor(
    private postsService: PostService, 
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

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

  // Refresh posts when pull-to-refresh is triggered
  doRefresh(event: any) {
    this.fetchPosts();
    setTimeout(() => {
      event.target.complete(); // End the refresher after fetching posts
    }, 1000); // Adjust time as needed
  }

  async openPostModal() {
      const modal = await this.modalController.create({
        component: PostModalComponent,
        componentProps: {
          // Pass any data you need to the modal
        },
        backdropDismiss: true, // Allow modal to close by clicking on the backdrop
      });
    
      // Handle data returned from the modal
      modal.onDidDismiss().then((data) => {
        console.log('Modal data:', data.data);
      });
    
      await modal.present();
    }
}
