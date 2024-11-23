import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPreviewPage } from './account-preview.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPreviewPageRoutingModule {}
