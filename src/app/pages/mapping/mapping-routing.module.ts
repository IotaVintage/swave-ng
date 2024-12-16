import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MappingPage } from './mapping.page';

const routes: Routes = [
  {
    path: '',
    component: MappingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MappingPageRoutingModule {}
