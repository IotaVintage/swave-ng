
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeltaPageRoutingModule } from './delta-routing.module';

import { DeltaPage } from './delta.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeltaPageRoutingModule
  ],
  declarations: [DeltaPage],
})
export class DeltaPageModule {}
