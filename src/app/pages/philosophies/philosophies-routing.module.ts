import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhilosophiesPage } from './philosophies.page';

const routes: Routes = [
  {
    path: '',
    component: PhilosophiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhilosophiesPageRoutingModule {}
