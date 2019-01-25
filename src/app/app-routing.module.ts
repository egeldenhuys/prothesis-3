import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DreamsComponent } from './pages/dreams/dreams.component';

const routes: Routes = [
  {
    path: 'dreams',
    component: DreamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
