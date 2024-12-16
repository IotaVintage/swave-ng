import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MappingPageRoutingModule } from './mapping-routing.module';

import { MappingPage } from './mapping.page';

import { ZoomableDirective } from 'src/app/zoomable.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MappingPageRoutingModule
  ],
  declarations: [MappingPage, ZoomableDirective]
})
export class MappingPageModule {}
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MappingPage } from './mapping.page';
// import { ZoomableDirective } from 'src/app/zoomable.directive';

// @NgModule({
//   declarations: [MappingPage, ZoomableDirective],
//   imports: [CommonModule],
//   exports: [ZoomableDirective]
// })
// export class MappingPageModule {}

