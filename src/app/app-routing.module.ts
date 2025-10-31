import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { UniteOfMeasurementComponent } from './components/unite-of-measurement/unite-of-measurement.component';
 

const routes: Routes = [
   {path: 'category', component:CategoryComponent},
   {path: 'uom', component:UniteOfMeasurementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
