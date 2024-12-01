import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighlightsPage } from './highlights.page';

const routes: Routes = [
  {
    path: '',
    component: HighlightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighlightsPageRoutingModule {}
