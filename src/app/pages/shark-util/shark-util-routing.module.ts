import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharkUtilPage } from './shark-util.page';

const routes: Routes = [
  {
    path: '',
    component: SharkUtilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharkUtilPageRoutingModule {}
