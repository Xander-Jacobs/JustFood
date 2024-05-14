import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home-tab',
        loadChildren: () => import('../home-tab/home-tab.module').then( m => m.HomeTabPageModule)
      },
      {
        path: 'search-tab',
        loadChildren: () => import('../search-tab/search-tab.module').then( m => m.SearchTabPageModule)
      },
      {
        path: 'cart-tab',
        loadChildren: () => import('../cart-tab/cart-tab.module').then( m => m.CartTabPageModule)
      },
      {
        path: 'account-tab',
        loadChildren: () => import('../account-tab/account-tab.module').then( m => m.AccountTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
