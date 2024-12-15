import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharkIdPageRoutingModule } from './shark-id-routing.module';

import { SharkIdPage } from './shark-id.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharkIdPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SharkIdPage]
})
export class SharkIdPageModule {}
