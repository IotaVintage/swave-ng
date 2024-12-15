import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { EventDetailModalComponent } from '../event-detail-modal/event-detail-modal.component';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.page.html',
  styleUrls: ['./highlights.page.scss'],
})
export class HighlightsPage implements OnInit {
  events: any[] = [];  // Array to store events fetched from the server

  constructor(
    private http: HttpClient,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // Fetch events when the component is initialized
    this.getEvents();
  }

  // Function to fetch events from the backend
  getEvents() {
    this.http.get('http://your-backend-url/get-events')  // Replace with your backend URL
      .subscribe((response: any) => {
        this.events = response;  // Assign fetched events to the events array
      }, error => {
        console.error('Error fetching events:', error);
      });
  }

  // Function to open the event detail modal
  async openEventDetail(event: any) {
    const modal = await this.modalController.create({
      component: EventDetailModalComponent,
      componentProps: {
        event: event  // Pass the selected event to the modal
      }
    });
    await modal.present();
  }
}
