import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'shark-id',
    loadChildren: () => import('./pages/shark-id/shark-id.module').then( m => m.SharkIdPageModule)
  },
  {
    path: 'account-preview',
    loadChildren: () => import('./pages/account-preview/account-preview.module').then( m => m.AccountPreviewPageModule)
  },
  {
    path: 'account-setup',
    loadChildren: () => import('./pages/account-setup/account-setup.module').then( m => m.AccountSetupPageModule)
  },
  {
    path: 'code-auth',
    loadChildren: () => import('./pages/code-auth/code-auth.module').then( m => m.CodeAuthPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'interests',
    loadChildren: () => import('./pages/interests/interests.module').then( m => m.InterestsPageModule)
  },
  {
    path: 'highlights',
    loadChildren: () => import('./pages/highlights/highlights.module').then( m => m.HighlightsPageModule)
  },
  {
    path: 'sail',
    loadChildren: () => import('./pages/sail/sail.module').then( m => m.SailPageModule)
  },
  {
    path: 'shark-util',
    loadChildren: () => import('./pages/shark-util/shark-util.module').then( m => m.SharkUtilPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'guest-mode',
    loadChildren: () => import('./pages/guest-mode/guest-mode.module').then( m => m.GuestModePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
