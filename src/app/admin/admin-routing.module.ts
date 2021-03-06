
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{
      path: 'users',
      loadChildren: './user/user.module#UserModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
