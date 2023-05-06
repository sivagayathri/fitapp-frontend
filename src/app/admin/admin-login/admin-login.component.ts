import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
adminid:any
password:any
registerStatus:boolean=false
constructor(private api:ApiService,private adminRouter:Router){
}
store(){
this.api.store(this.adminid,this.password).subscribe((result:any)=>{
  console.log(result);
  
  //redirect to login page-navigateByurl()
    setTimeout(() => {
      this.adminRouter.navigateByUrl('/admin/collection') 
      }, 3000);

   
})
}
}
