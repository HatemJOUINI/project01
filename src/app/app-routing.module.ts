import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: MenuComponent, children: [
    // { path: '', loadChildren: './transaction/transaction.module#TransactionModule' },
    // { path: 'a', loadChildren: './account/account.module#AccountModule' },
  ]},
  // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'p', loadChildren: './pages/pages.module#PagesModule' },
  { path: '**', component: NotfoundComponent },
  {
    path:"Client" , component:ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
