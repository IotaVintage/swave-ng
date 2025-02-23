import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss'],
})
export class PostModalComponent {
  postContent: string = '';
  selectedTags: string[] = [];

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
  ) {}

  dismiss() {
    this.modalController.dismiss();
  }

  submitPost() {
    const unpID = localStorage.getItem('unpID');

    if (!unpID) {
      console.error('User  is not logged in');
      return;
    }

    const formData = new FormData();
    formData.append('unpID', unpID);
    formData.append('caption', this.postContent);

    this.http.post('http://localhost:3000/post/create-post', formData)
      .subscribe(response => {
        console.log('Post created successfully:', response);
        this.dismiss(); 
      }, error => {
        console.error('Error creating post:', error);
      });
  }
}