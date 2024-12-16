import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCollegePage } from './admin-college.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCollegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCollegePageRoutingModule {}
