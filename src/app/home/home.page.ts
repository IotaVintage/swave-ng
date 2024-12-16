import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isAdmin: boolean = false;

  constructor() {
    this.isAdmin = this.checkIfUserIsAdmin();
  }

  checkIfUserIsAdmin(): boolean {
    const role = localStorage.getItem('role');

    if (role === 'admin') {
      return true;
    } else {
      return false
    }
  }
}
