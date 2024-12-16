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
  currents: any[] = [];  // Stores all events
  todayEvents: any[] = [];  // Stores today's events
  thisMonthEvents: any[] = [];  // Stores this month's events

  constructor(
    private http: HttpClient,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // Fetch events when the component is initialized
    this.loadEvents();
  }

  // Fetch events from backend
  loadEvents() {
    this.fetchEvents();
    this.fetchTodayEvents();
    this.fetchMonthEvents();
  }

  fetchEvents() {
    this.http.get('http://localhost:3000/event/get-events').subscribe(
      (response: any) => {
        console.log('Fetched events:', response); // Debug response
        this.currents = response;
      },
      (error) => {
        console.error('Error fetching current events:', error);
      }
    );
  }

  fetchTodayEvents() {
    this.http.get('http://localhost:3000/event/get-today-events').subscribe(
      (response: any) => {
        console.log('Fetched today\'s events:', response); // Debug response
        this.todayEvents = response;
      },
      (error) => {
        console.error('Error fetching today’s events:', error);
      }
    );
  }

  fetchMonthEvents() {
    this.http.get('http://localhost:3000/event/get-month-events').subscribe(
      (response: any) => {
        console.log('Fetched this month\'s events:', response); // Debug response
        this.thisMonthEvents = response;
      },
      (error) => {
        console.error('Error fetching this month’s events:', error);
      }
    );
  }

  // Refresh posts when pull-to-refresh is triggered
  doRefresh(event: any) {
    this.loadEvents();
    setTimeout(() => {
      event.target.complete(); // End the refresher after fetching posts
    }, 1000); // Adjust time as needed
  }


  // highlights.page.ts
  async openEventDetail(event: any) {
    // Store event in localStorage
    localStorage.setItem('selectedEvent', JSON.stringify(event));

    const modal = await this.modalController.create({
      component: EventDetailModalComponent,
    });

    modal.onDidDismiss().then(() => {
      // After closing the modal, reload the events (optional)
      this.loadEvents();
    });

    await modal.present();
  }
}
