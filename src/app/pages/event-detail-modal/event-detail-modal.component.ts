import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-detail-modal',
  templateUrl: './event-detail-modal.component.html',
  styleUrls: ['./event-detail-modal.component.scss'],
})
export class EventDetailModalComponent implements OnInit {
  @Input() event: any;  // Event passed from parent component

  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Initialize the form fields with event details
    console.log(this.event);
  }

  // Handle the file input change and convert the file to base64
  onFileSelected(event: any) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.event.image = reader.result as string; // Save the image data URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  }

  // Function to save changes to the event
  saveEvent() {
    const formData = new FormData();
    formData.append('title', this.event.title);
    formData.append('date', this.event.date);
    formData.append('description', this.event.description);
    
    // If an image file is selected, append it to FormData
    if (this.event.image && typeof this.event.image !== 'string') {
      formData.append('image', this.event.image);
    }

    // If the image is a base64 string, you might want to process it differently on the backend
    if (typeof this.event.image === 'string' && this.event.image.startsWith('data:image')) {
      formData.append('imageData', this.event.image);
    }

    // Send the form data to the backend (example endpoint)
    this.http.put(`http://localhost:3000/post/update-event/${this.event.id}`, formData)
      .subscribe(response => {
        console.log('Event updated:', response);
        this.dismissModal();
      }, error => {
        console.error('Error updating event:', error);
      });
  }

  // Function to delete the event
  deleteEvent() {
    this.http.delete(`http://localhost:3000/post/delete-event/${this.event.id}`)
      .subscribe(response => {
        console.log('Event deleted:', response);
        this.dismissModal(); // Notify parent that the event was deleted
      }, error => {
        console.error('Error deleting event:', error);
      });
  }

  // Close the modal with an optional success flag
  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
