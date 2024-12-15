import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhilosophiesPageRoutingModule } from './philosophies-routing.module';

import { PhilosophiesPage } from './philosophies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhilosophiesPageRoutingModule
  ],
  declarations: [PhilosophiesPage]
})
export class PhilosophiesPageModule {}
