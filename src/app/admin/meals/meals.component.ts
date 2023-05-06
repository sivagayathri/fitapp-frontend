import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
  image:any
  title:any
  content:any
  mealid:any
  mealitem:any
  registerStatus: boolean = false
constructor(private api:ApiService,private registerRouter:Router){}
meal(){
  this.api.adminmeal().subscribe((result:any)=>{
console.log(result);
this.registerStatus=true
//redirect to login page-navigateByurl()
  

  })
}

}
