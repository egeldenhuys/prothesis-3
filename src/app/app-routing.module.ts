import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DreamsComponent } from './pages/dreams/dreams.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'dreams',
    component: DreamsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
