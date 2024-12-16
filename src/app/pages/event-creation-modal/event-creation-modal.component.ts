// event-detail-modal.component.ts
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-creation-modal',
  templateUrl: './event-creation-modal.component.html',
  styleUrls: ['./event-creation-modal.component.scss'],
})
export class EventCreationModalComponent implements OnInit {
  event: any = {};  // Event will be populated from localStorage

  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
      
  }

  postEvent(){
    const formData = new FormData();
    formData.append('title', this.event.EventName);  // Make sure the correct property is used
    formData.append('date', this.event.EventDate);
    formData.append('description', this.event.Description);

    // Send the form data to the backend (example endpoint)
    this.http.post(`http://localhost:3000/event/create-event`, formData)
      .subscribe(response => {
        console.log('Event updated:', response);
        this.dismissModal(true); // Pass true to indicate successful update
      }, error => {
        console.error('Error creating event:', error);
      });
  }

  // Close the modal and pass a result flag
  dismissModal(updated: boolean) {
    this.modalController.dismiss({
      dismissed: updated,  // Pass the result flag to indicate whether the event was updated or deleted
    });
  }
}
