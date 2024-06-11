import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs/home',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs/tabs1',
    redirectTo: 'tabs/tabs1',
    pathMatch: 'full'
  },
  {
    path: 'tabs/tabs2',
    redirectTo: 'tabs/tabs2',
    pathMatch: 'full'
  },
  {
    path: 'tabs/tabs3',
    redirectTo: 'tabs/tabs3',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then( m => m.E404PageModule)
  },
  /*{
    path: 'tabs1',
    loadChildren: () => import('./tabs1/tabs1.module').then( m => m.Tabs1PageModule)
  },
  {
    path: 'tabs2',
    loadChildren: () => import('./tabs2/tabs2.module').then( m => m.Tabs2PageModule)
  },
  {
    path: 'tabs3',
    loadChildren: () => import('./tabs3/tabs3.module').then( m => m.Tabs3PageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
