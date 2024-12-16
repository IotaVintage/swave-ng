import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormalCollegePage } from './normal-college.page';

const routes: Routes = [
  {
    path: '',
    component: NormalCollegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormalCollegePageRoutingModule {}
