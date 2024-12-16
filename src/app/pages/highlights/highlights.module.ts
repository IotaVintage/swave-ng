import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighlightsPageRoutingModule } from './highlights-routing.module';

import { HighlightsPage } from './highlights.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighlightsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [HighlightsPage]
})
export class HighlightsPageModule {}
