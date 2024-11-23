import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPreviewPageRoutingModule } from './account-preview-routing.module';

import { AccountPreviewPage } from './account-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPreviewPageRoutingModule
  ],
  declarations: [AccountPreviewPage]
})
export class AccountPreviewPageModule {}
