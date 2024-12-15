import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    console.log('Welcome to Settings!');
  }

  logOut() {
    // Clear all local storage
    localStorage.clear();

    // Check if local storage is successfully cleared
    if (localStorage.length === 0) {
      // Navigate to the login page
      this.presentToast('Logout Successful!');
      this.router.navigate(['/login']);
    } else {
      // Handle the error (optional)
      this.presentToast('Logout Unsuccessful!');
    }
  }

  // Function to show toast messages
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }
}
