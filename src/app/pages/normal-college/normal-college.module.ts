import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormalCollegePageRoutingModule } from './normal-college-routing.module';

import { NormalCollegePage } from './normal-college.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormalCollegePageRoutingModule
  ],
  declarations: [NormalCollegePage]
})
export class NormalCollegePageModule {}
