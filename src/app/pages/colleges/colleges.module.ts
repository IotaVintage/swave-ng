import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollegesPageRoutingModule } from './colleges-routing.module';

import { CollegesPage } from './colleges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollegesPageRoutingModule
  ],
  declarations: [CollegesPage]
})
export class CollegesPageModule {}
