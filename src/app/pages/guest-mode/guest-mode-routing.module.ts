import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestModePage } from './guest-mode.page';

const routes: Routes = [
  {
    path: '',
    component: GuestModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestModePageRoutingModule {}
