import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('../fiba-main/fiba-main.module').then(m => m.FibaMainModule)
      },
      {
        path:'login',
        loadChildren: () => import('../../auth/login/login.module').then(m => m.LoginModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
