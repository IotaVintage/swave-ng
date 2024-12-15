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
  // predefinedTags: string[] = ['Tag1', 'Tag2', 'Tag3', 'Tag4'];

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
  ) {}

  dismiss() {
    this.modalController.dismiss();
  }

  // onFileSelected(event: Event) {
  //   const fileInput = event.target as HTMLInputElement;
  //   if (fileInput.files && fileInput.files.length > 0) {
  //     this.selectedFile = fileInput.files[0];
  //   }
  // }

  submitPost() {
    const unpID = localStorage.getItem('unpID');

    if (!unpID) {
      console.error('User  is not logged in');
      return;
    }

    const formData = new FormData();
    formData.append('unpID', unpID);
    formData.append('caption', this.postContent);
    
    // this.selectedTags.forEach(tag => {
    //   formData.append('tags[]', tag);
    // });

    // Replace with your API endpoint
    this.http.post('http://localhost:3000/post/create-post', formData)
      .subscribe(response => {
        console.log('Post created successfully:', response);
        this.dismiss(); 
      }, error => {
        console.error('Error creating post:', error);
      });
  }
}