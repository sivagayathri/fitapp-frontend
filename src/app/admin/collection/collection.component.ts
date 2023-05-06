import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit{
  resultss:any
  constructor(private api:ApiService){}
  ngOnInit(): void {
   this.table();
  }
  table(){

    this.api.table().subscribe((result:any)=>{
      console.log(result);
      
      
      this.resultss=result
     
      
  
    })
    
  }
}
