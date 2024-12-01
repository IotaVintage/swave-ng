import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharkUtilPageRoutingModule } from './shark-util-routing.module';

import { SharkUtilPage } from './shark-util.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharkUtilPageRoutingModule
  ],
  declarations: [SharkUtilPage]
})
export class SharkUtilPageModule {}
