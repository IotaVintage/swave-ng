import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.page.html',
  styleUrls: ['./account-setup.page.scss'],
})
export class AccountSetupPage {
  password: string = '';
  barangay: string = '';
  cityTown: string = '';
  province: string = '';
  contactNumber: string = '';
  birthday: string = '';
  age: number | null = null;
  sex: string = '';
  college: string = '';
  program: string = '';
  section: string = '';
  currentPrograms: string[] = [];
  userDetails: any;

  constructor(private http: HttpClient, private router: Router, private toastController: ToastController, private location: Location) {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  }


  returnToPrevious() {
    this.location.back();
  }

  colleges = [
    { name: 'CAS', value: 'CAS' },
    { name: 'CCIT', value: 'CCIT' },
    { name: 'CBAA', value: 'CBAA' },
    { name: 'CCJE', value: 'CCJE' },
    { name: 'COE', value: 'COE' },
    { name: 'CArch', value: 'CArch' },
    { name: 'CTE', value: 'CTE' },
    { name: 'CSW', value: 'CSW' },
    { name: 'CFAD', value: 'CFAD' },
    { name: 'CPAD', value: 'CPAD' },
    { name: 'CLaw', value: 'CLaw' },
    { name: 'CHS', value: 'CHS' },
    { name: 'CTech', value: 'CTech' },
    { name: 'CN', value: 'CN' },
    { name: 'CM', value: 'CM' },
    { name: 'CHTM', value: 'CHTM' }
  ];

  programs: { [key: string]: string[] } = {
    CAS: ['BA Political Science', 'BA Communications', 'BS Biology', 'BS Marine Biology', 'BS Mathematics', 'BS Physics', 'BS Environmental Science', 'BS Psychology', 'MA Guidance & Counseling'],
    CCIT: ['BS Computer Science', 'BS Information Technology', 'Bachelor of Library and Information Science', 'Diploma in Computer Technology'],
    CBAA: ['BS Business Administration', 'BS Accountancy', 'BS Entrepreneurship', 'BS Cooperative Management', 'Associate in Office Management', 'Master in Business Administration', 'Doctor in Business Administration'],
    CCJE: ['BS Criminology', 'BS Law Enforcement Administration', 'MS Criminal Justice with Specialization in Criminology'],
    COE: ['BS Civil Engineering', 'BS Geodetic Engineering', 'BS Sanitary Engineering'],
    CArch: ['BS Architecture', 'BS Environmental Planning'],
    CTE: ['Bachelor of Secondary Education', 'Bachelor of Elementary Education', 'Bachelor of Early Childhood Education', 'Bachelor of Physical Education', 'BS Industrial Education', 'Bachelor of Special Needs Education', 'Bachelor of Technical Vocational Teacher Education', 'Bachelor of Technology and Livelihood Education', 'MA Education', 'MA Math Education', 'MA Teaching', 'MA Technology and Livelihood Education', 'MS Teaching'],
    CSW: ['BS Social Work'],
    CFAD: ['Associate in Commercial Arts', 'BS Fine Arts in Painting', 'BS Fine Arts in Visual Communication', 'BS Interior Design'],
    CPAD: ['BS Public Administration', 'Master of Public Administration', 'Doctor of Public Administration'],
    CLaw: ['Juris Doctor'],
    CHS: ['BS Community Health Management', 'BS Emergency Health Services', 'BS Medical Laboratory Science', 'BS Public Midwifery'],
    CTech: ['Associate in Mechatronics and Automation Technology', 'BS Industrial Technology', 'BS Mechatronics and Automation Technology', 'Certificate in Electronic Product Assembly and Servicing', 'Diploma in Mechatronics Servicing', 'Two-Year Technical Course'],
    CN: ['BS Nursing', 'MA Nursing'],
    CM: ['Doctor of Medicine'],
    CHTM: ['BS Hospitality Management', 'BS Tourism Management']
  };

  updatePrograms() {
    this.currentPrograms = this.programs[this.college] || [];
  }

  completeRegistration() {
    const data = {
      unpID: this.userDetails.unpID,
      password: this.password,
      barangay: this.barangay,
      cityTown: this.cityTown,
      province: this.province,
      contactNumber: this.contactNumber,
      birthday: this.birthday,
      age: this.age,
      sex: this.sex,
      college: this.college,
      program: this.program,
      section: this.section,
    };

    console.log(this.userDetails.unpID + ' ' + this.password + ' ' + this.barangay);
    console.log(this.cityTown + ' ' + this.province + ' ' + this.contactNumber);
    console.log(this.birthday + ' ' + this.age + ' ' + this.sex);
    console.log(this.college + ' ' + this.program + ' ' + this.section);

    this.http.post('http://localhost:3000/user/account-setup', data).subscribe(
      () => {
        this.presentToast('Account Registered Successfully!');
        this.router.navigate(['/login']);
      },
      (error) => {
        this.presentToast('Error completing registration');
      }
    );
  }

  // Function to show toast messages
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }

  accountSetup(){
    console.log('Verifying Account Details Properly');
    this.completeRegistration();
  }
}
