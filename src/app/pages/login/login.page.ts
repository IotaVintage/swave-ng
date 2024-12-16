import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  unpID: string = '';
  password: string = '';
  errorMessage: string = '';
  role: string = '';

  constructor(private http: HttpClient, private router: Router, private toastController: ToastController) { }

  logIn() {
    if (!this.unpID || !this.password) {
      this.errorMessage = 'Both unpID and password are required.';
      this.presentToast(this.errorMessage);
      return;
    }

    const loginData = { unpID: this.unpID, password: this.password };

    this.http.post('http://localhost:3000/user/login', loginData).subscribe(
      (response: any) => {
        localStorage.setItem('unpID', response.user.unpID);
        localStorage.setItem('userType', response.user.userType);

        const userType = response.user.userType;
        
        this.checkRole(userType);
      },
      (error) => {
        this.errorMessage = error.error?.error || 'Login failed. Please try again.';
        this.presentToast(this.errorMessage);
      }
    );
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

  checkRole(userType: string) {
    const role = this.role;

    if(role != userType) {
      this.presentToast('Account non-existent please check properly the role type or Register!');
    } else {
      localStorage.setItem('role', userType); // Sets a local storage for role is used to show or hide admin functionalities
      // Redirect based on user type
      if (userType === 'admin') {
        this.presentToast('Login Successfully!');
        this.router.navigate(['/home']);
      } else {
        this.presentToast('Login Successfully!');
        this.router.navigate(['/home']);
      }
    }
  }
}
