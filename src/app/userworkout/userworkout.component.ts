import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userworkout',
  templateUrl: './userworkout.component.html',
  styleUrls: ['./userworkout.component.css']
})
export class UserworkoutComponent implements OnInit{
  prouctid:string=""
  product:any={}
  background: any = 'https://wallpapers.com/images/hd/simple-iris-color-hd-background-lrd08uksv9qzmfsp.jpg'
  ms:any='0'+0;
sec:any='0'+0;
min:any='0'+0;
hr:any='0'+0;
starttimer:any;
running:boolean=false
  constructor(private viewactivatedroute:ActivatedRoute,private api:ApiService){}
ngOnInit(): void {

    //to get path parameter from component route
    this.viewactivatedroute.params.subscribe((data:any)=>{
      console.log(data);
      this.prouctid=data.id
    })

    //api call
    this.api.viewaproduct(this.prouctid).subscribe((result:any)=>{
      console.log(result);
      this.product=result
      
    },(result:any)=>{
      console.log(result.error);
      
    })

}

start():void{
  if(!this.running){
    this.running=true
    this.starttimer=setInterval(()=>{
      this.ms++;
      this.ms=this.ms<10?'0'+this.ms:this.ms;
      if(this.ms===100){
        this.sec++;
        this.sec=this.sec<10?'0'+this.sec:this.sec;
        this.ms='0'+0
      }
      if(this.sec===60){
        this.min++;
        this.min=this.min <10?'0'+this.min:this.min;
        this.sec='0'+0
      }
      if(this.min==60){
        this.hr++;
        this.hr=this.hr<10?'0'+this.hr:this.hr;
        this.sec='0'+0
      }
    },10);

  }else{
    this.stop();

  }
}
stop():void{
  clearInterval(this.starttimer);
  this.running=false;
}
reset():void{
  clearInterval(this.starttimer);
  this.running=false;
this.hr=this.min=this.sec=this.ms='0'+0;
}
}

