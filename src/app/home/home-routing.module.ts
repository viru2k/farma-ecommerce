import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { BeautyComponent } from './beauty/beauty.component';


const routes: Routes = [
 
  {
    path: 'catalogo',
    component: BeautyComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
