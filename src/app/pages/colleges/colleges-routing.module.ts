import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegesPage } from './colleges.page';

const routes: Routes = [
  {
    path: '',
    component: CollegesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegesPageRoutingModule {}
