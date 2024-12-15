import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any = null;
  isLoading: boolean = true;
  errorMessage: string = '';
  defaultProfilePicture: string = 'assets/swave-007-logos/72ppi/black.png';
  defaultCoverPhoto: string = 'assets/swave-007-logos/72ppi/black.png';

  constructor(
    private http: HttpClient,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    const unpID = localStorage.getItem('unpID');
    
    if (!unpID) {
        this.errorMessage = 'No unpID found. Please log in again.';
        this.isLoading = false;
        return;
    }

    // Fetch profile data
    this.http.get(`http://localhost:3000/user/profile/${unpID}`).subscribe({
        next: (data: any) => {
            this.profile = data;
            this.isLoading = false;

            this.fetchImages(unpID);
        },
        error: (err) => {
            this.errorMessage = 'Failed to load profile. Please try again later.';
            this.isLoading = false;
        },
    });
}

fetchImages(unpID: string) {
  this.http.get(`http://localhost:3000/user/fetch-images/${unpID}`).subscribe({
      next: (data: any) => {
          // Update the profile object with the image paths
          this.profile.ProfilePic = data.ProfilePic || this.defaultProfilePicture;
          this.profile.CoverPhoto = data.CoverPhoto || this.defaultCoverPhoto;
      },
      error: (err) => {
          console.error('Error fetching images:', err);
          this.errorMessage = 'Error fetching images. Please try again.';
      },
  });
}
  // Handle image option actions (Upload/Delete)
  async openImageOptions(type: 'ProfilePic' | 'CoverPhoto') {
    const actionSheet = await this.actionSheetController.create({
      header: `Manage ${type === 'ProfilePic' ? 'Profile Picture' : 'Cover Photo'}`,
      buttons: [
        { text: 'Upload New', icon: 'cloud-upload-outline', handler: () => this.uploadImage(type) },
        { text: 'Delete', icon: 'trash-outline', role: 'destructive', handler: () => this.deleteImage(type) },
        { text: 'Cancel', icon: 'close-outline', role: 'cancel' },
      ],
    });
    await actionSheet.present();
  }

  uploadImage(type: 'ProfilePic' | 'CoverPhoto') {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) this.uploadFile(file, type);
    };
    fileInput.click();
  }

  uploadFile(file: File, type: 'ProfilePic' | 'CoverPhoto') {
    const formData = new FormData();
    formData.append(type === 'ProfilePic' ? 'profilePic' : 'coverPhoto', file); // Use the correct field name
    formData.append('unpID', this.profile.UnpID); // Ensure unpID is being sent

    const endpoint = type === 'ProfilePic' ? 'upload-profile-pic' : 'upload-cover-photo'; // Determine the endpoint

    this.http.post(`http://localhost:3000/user/${endpoint}`, formData).subscribe({
        next: (response: any) => {
            this.profile[type] = response.filePath; // Update the profile picture/cover photo path
        },
        error: (err) => {
            console.error(`Error uploading ${type}:`, err);
            this.errorMessage = `Error uploading ${type}. Please try again.`;
        },
    });
}

  deleteImage(type: 'ProfilePic' | 'CoverPhoto') {
    this.http.delete(`http://localhost:3000/user/delete-image`, {
      body: { unpID: this.profile.UnpID, type },
    }).subscribe({
      next: () => {
        this.profile[type] = type === 'ProfilePic' ? this.defaultProfilePicture : this.defaultCoverPhoto;
      },
      error: (err) => {
        console.error(`Error deleting ${type}:`, err);
        this.errorMessage = `Error deleting ${type}. Please try again.`;
      },
    });
  }

  // Bio Options
  async openBioOptions() {
    const alert = await this.alertController.create({
      header: 'Edit Bio',
      inputs: [
        { name: 'bio', type: 'textarea', placeholder: 'Enter your bio', value: this.profile.Bio },
      ],
 buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Save',
          handler: (data) => {
            if (data.bio) {
              this.updateBio(data.bio);
            }
          },
        },
        {
          text: 'Clear Bio',
          handler: () => {
            this.clearBio();
          },
        },
      ],
    });
    await alert.present();
  }

  clearBio() {
    this.http.post('http://localhost:3000/user/clear-bio', { unpID: this.profile.UnpID }).subscribe({
      next: () => {
        this.profile.Bio = null;
      },
      error: (err) => {
        console.error('Error clearing bio:', err);
        this.errorMessage = 'Error clearing bio. Please try again.';
      },
    });
  }

  updateBio(newBio: string) {
    const body = { unpID: this.profile.UnpID, bio: newBio };
    this.http.post('http://localhost:3000/user/update-bio', body).subscribe({
      next: () => {
        this.profile.Bio = newBio;
      },
      error: (err) => {
        console.error('Error updating bio:', err);
        this.errorMessage = 'Error updating bio. Please try again.';
      },
    });
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