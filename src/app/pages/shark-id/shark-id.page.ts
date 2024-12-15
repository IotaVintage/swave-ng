import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-shark-id',
  templateUrl: './shark-id.page.html',
  styleUrls: ['./shark-id.page.scss'],
})

export class SharkIdPage  {
  unpID: string = '';
  email: string = '';

  constructor(private http: HttpClient, private router: Router, private location: Location, private toastController: ToastController) {}

  // Search user based on unpID
  searchUnpID() {
    this.http.get(`http://localhost:3000/user/search-user/${this.unpID}`).subscribe(
      (response: any) => {
        if (response.hasPassword) {
          // Show toast and redirect to login after toast disappears
          this.presentToast('Account already exists. Redirecting to login...')
            .then(() => {
              this.router.navigate(['/login']);
            });
        } else {
          // Store user details locally and redirect to account setup if no password
          localStorage.setItem('userDetails', JSON.stringify(response));
          this.email = response.email;
          this.router.navigate(['/code-auth']);
        }
      },
      (error) => {
        this.presentToast('unpID not found or invalid');
        console.error(error);
      }
    );
  }

  returnToPrevious() {
    this.location.back();
  }

  goToLogin() {
    this.router.navigate(['/log-in']);
  }

  // Handle button click and conditionally navigate
  onNextButtonClick() {
    this.searchUnpID();
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
    // Return the promise to wait for the toast to disappear before continuing
    return toast.onDidDismiss();
  }
}
