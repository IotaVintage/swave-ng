import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SailPageRoutingModule } from './sail-routing.module';

import { SailPage } from './sail.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SailPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SailPage]
})
export class SailPageModule {}
