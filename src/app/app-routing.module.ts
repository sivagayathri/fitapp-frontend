import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { CollectionComponent } from './admin/collection/collection.component';
import { MealsComponent } from './admin/meals/meals.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TrainerComponent } from './trainer/trainer.component';
import { UserdietComponent } from './userdiet/userdiet.component';
import { UserworkoutComponent } from './userworkout/userworkout.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },{
    path:'register',component:RegisterComponent
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {
    path:'admin/login',component:AdminLoginComponent
  },{
    path:'admin/collection',component:CollectionComponent
  },{
    path:'diet',component:UserdietComponent
  },{
    path:'workout',component:WorkoutComponent
  },
  {
    path:'userworkout/:id',component:UserworkoutComponent
  },{
    path:'admin/meals',component:MealsComponent
  },{
    path:'trainer',component:TrainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
