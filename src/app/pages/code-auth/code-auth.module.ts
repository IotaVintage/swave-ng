import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeAuthPageRoutingModule } from './code-auth-routing.module';

import { CodeAuthPage } from './code-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeAuthPageRoutingModule
  ],
  declarations: [CodeAuthPage]
})
export class CodeAuthPageModule {}
