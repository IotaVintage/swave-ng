import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeAuthPage } from './code-auth.page';

const routes: Routes = [
  {
    path: '',
    component: CodeAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeAuthPageRoutingModule {}
