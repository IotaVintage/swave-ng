import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCollegePageRoutingModule } from './admin-college-routing.module';

import { AdminCollegePage } from './admin-college.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCollegePageRoutingModule
  ],
  declarations: [AdminCollegePage]
})
export class AdminCollegePageModule {}
