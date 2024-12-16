// event-detail-modal.component.ts
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-detail-modal',
  templateUrl: './event-detail-modal.component.html',
  styleUrls: ['./event-detail-modal.component.scss'],
})
export class EventDetailModalComponent implements OnInit {
  event: any = {};  // Event will be populated from localStorage

  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Retrieve event from localStorage
    const storedEvent = localStorage.getItem('selectedEvent');
    if (storedEvent) {
      this.event = JSON.parse(storedEvent);  // Parse and assign the event data
      console.log(this.event);
    }
  }

  // Function to save changes to the event
  saveEvent() {
    const formData = new FormData();
    formData.append('title', this.event.EventName);  // Make sure the correct property is used
    formData.append('date', this.event.EventDate);
    formData.append('description', this.event.Description);

    // Send the form data to the backend (example endpoint)
    this.http.put(`http://localhost:3000/event/update-event/${this.event.EventID}`, formData)
      .subscribe(response => {
        console.log('Event updated:', response);
        this.dismissModal(true); // Pass true to indicate successful update
      }, error => {
        console.error('Error updating event:', error);
      });
  }

  // Function to delete the event
  deleteEvent() {
    this.http.delete(`http://localhost:3000/event/delete-event/${this.event.EventID}`)
      .subscribe(response => {
        console.log('Event deleted:', response);
        this.dismissModal(false); // Pass false to indicate deletion
      }, error => {
        console.error('Error deleting event:', error);
      });
  }

  // Close the modal and pass a result flag
  dismissModal(updated: boolean) {
    this.modalController.dismiss({
      dismissed: updated,  // Pass the result flag to indicate whether the event was updated or deleted
    });
  }
}
