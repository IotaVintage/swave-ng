import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'highlights',
        loadChildren: () => import('../pages/highlights/highlights.module').then(m => m.HighlightsPageModule)
      },
      {
        path: 'sail',
        loadChildren: () => import('../pages/sail/sail.module').then(m => m.SailPageModule)
      },
      {
        path: 'shark',
        loadChildren: () => import('../pages/shark-util/shark-util.module').then(m => m.SharkUtilPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'highlights',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'highlights',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
