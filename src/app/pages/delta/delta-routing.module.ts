import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeltaPage } from './delta.page';

const routes: Routes = [
  {
    path: '',
    component: DeltaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeltaPageRoutingModule {}
