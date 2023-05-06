import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CollectionComponent } from './collection/collection.component';
import { FormsModule } from '@angular/forms';
import { MealsComponent } from './meals/meals.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    CollectionComponent,
    MealsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
