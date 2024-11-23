import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
