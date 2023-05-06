import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';
import { CollectionComponent } from './collection/collection.component';
import { MealsComponent } from './meals/meals.component';

const routes: Routes = [{ path: '', component: AdminLoginComponent },
{
  path:'collection',component:CollectionComponent
  
},{
  path:'meals',component:MealsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
