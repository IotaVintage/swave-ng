import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestModePageRoutingModule } from './guest-mode-routing.module';

import { GuestModePage } from './guest-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestModePageRoutingModule
  ],
  declarations: [GuestModePage]
})
export class GuestModePageModule {}
