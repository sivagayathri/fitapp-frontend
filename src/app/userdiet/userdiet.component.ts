import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userdiet',
  templateUrl: './userdiet.component.html',
  styleUrls: ['./userdiet.component.css']
})
export class UserdietComponent implements OnInit {
  currentUsername: string = ""
  bmi:any
  logoutstatus:boolean=false
  isCollapse: boolean = true
  diet:string=''
  workout:string=''
  currentuserid: any
  image:any
  title:any
  content:any
  mealid:any
  view:boolean=false
  background: any = 'https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61805.jpg'
  constructor(private api:ApiService,private dashboardrouter:Router){}
  ngOnInit()  {
    this.currentUsername = localStorage.getItem("currentUsername") || ''
    this.currentuserid = localStorage.getItem("currentuserid") || ''
    this.userdiet();
    this.meal();
  }
  userdiet(){
    this.api.userdiet(this.currentuserid)
    .subscribe((result: any) => {
      console.log(result);
      this.bmi=result[0].bmi
     
 
  

    }, (result: any) => {
      alert(result.error.message)
    })
  }
  work(){
    if(this.bmi<18){
      this.workout='yoga'
    }else if(this.bmi<18 || this.bmi<25){
        this.diet='maintainence calorie'
        this.workout='active atleast thrice a week'
      }else if(this.bmi>25){
        this.diet='calorie deficient'
        this.workout='high intensity cardio workout'
      }
  }
  collapse() {
    this.isCollapse = !this.isCollapse
  }
  diett(){
    this.view=true
    if(this.bmi<18){
      this.diet=' Try to follow Weight Gain or High Fibre Meal Plan'
  
     
    }
    else if(this.bmi<18 || this.bmi<25){
      this.diet='Try to follow Weight Management or Mediterranean diet plan'
      
    }else if(this.bmi>25){
      this.diet='Try to follow Weight Loss or Low Carbohydrate diet plan'
      
    }
  }
  meal(){
    this.api.adminmeal().subscribe((result:any)=>{
      console.log(result);
      this.mealid=result
      
    })
  }
  logout(){
    //remove login details from local storage
    localStorage.removeItem('token')
    localStorage.removeItem('currentUsername')
    localStorage.removeItem('currentuserid')
    this.logoutstatus=true
    setTimeout(()=>{
      this.dashboardrouter.navigateByUrl('')
    },3000)
   
  }
 
}
