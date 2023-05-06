import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private api:ApiService,private loginRouter:Router){}
userid:any
password:any
login() {
   
  
    this.api.login(this.userid,this.password)
    .subscribe((result:any)=>
    {
      console.log(result);
      
      //alert(result.message)
      localStorage.setItem("currentUsername",result.currentUsername)
      //geting acno in localstorage
      localStorage.setItem("currentuserid",result.currentuserid)
      localStorage.setItem("token",result.token)

      result.currentUsername
      setTimeout(() => {
        this.loginRouter.navigateByUrl('diet')
      }, 3000);
    },
  )
  }


}

