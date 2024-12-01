import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SailPage } from './sail.page';

const routes: Routes = [
  {
    path: '',
    component: SailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SailPageRoutingModule {}
