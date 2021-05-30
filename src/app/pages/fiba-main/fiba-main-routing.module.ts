import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibaMainComponent } from './fiba-main.component';

const routes: Routes = [
  {
    path:'',
    component:FibaMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibaMainRoutingModule { }
