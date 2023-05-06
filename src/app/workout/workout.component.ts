import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit{
  allproducts:any=[]
  constructor(private api:ApiService){}
  ngOnInit() {
    this.api.getallworkouts().subscribe((data:any)=>{
      console.log(data);
      this.allproducts=data
      
    })
  }
}
