import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'tabs1',
        loadChildren: () => import('../tabs1/tabs1.module').then( m => m.Tabs1PageModule)
      },
      {
        path: 'tabs2',
        loadChildren: () => import('../tabs2/tabs2.module').then( m => m.Tabs2PageModule)
      },
      {
        path: 'tabs3',
        loadChildren: () => import('../tabs3/tabs3.module').then( m => m.Tabs3PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
