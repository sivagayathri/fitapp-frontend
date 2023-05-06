import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
weight:any=''
height:any=''
  heightM: string = '';
  weightM: string = '';
name:any
userid:any
password:any
  bmiValue: any;
  bmi:any
  bmiMessage: string = '';
  bmiis:boolean=false;
  registerStatus: boolean = false

  constructor(private api:ApiService,private registerRouter:Router) { }
  calculatebmi() {
   
   
      if (this.weight > 0 && this.height > 0) {

        let finalBmi = this.weight / (this.height / 100 * this.height / 100);
        this.bmiValue = parseFloat(finalBmi.toFixed(2));
       
        console.log(this.bmiValue);
        this.bmiis=true
        this.setBMIMessage();
        this.heightM = 'cm';
        this.weightM = 'kg';
       }
    
  }
  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
    }
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
    }
    if (this.bmiValue > 30) {
      this.bmiMessage = "Obese"
    }
  }
  register(){
    
    this.api.register(this.name,this.userid,this.password,this.weight,this.height,this.bmi).subscribe((result:any)=>{
      console.log(result);
     
      this.registerStatus=true
          //redirect to login page-navigateByurl()
            setTimeout(() => {
              this.registerRouter.navigateByUrl('') 
              }, 5000);
      
    })
  }

}
