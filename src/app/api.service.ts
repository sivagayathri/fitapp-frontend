import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL='https://fitapp-gq2y.onrender.com'
//deployed server:https://fitapp-gq2y.onrender.com
  constructor(private http:HttpClient) { }

  register(name:any,userid:any,password:any,weight:any,height:any,bmi:any){
    const body={
      name,userid,password,weight,height,bmi
    }
//post type request
 return this.http.post(`${this.BASE_URL}/register`,body)
  }
  login(userid:any,password:any){
    const body={
      userid,password
    }
    return this.http.post(`${this.BASE_URL}/login`,body)
  }
  //add token to request header
appendtoken(){
  //get token from localstorage
  const token=localStorage.getItem('token')
  let headers=new HttpHeaders()
  if(token){
    //create request header
   
    //append token in verify-token as key in header
    headers=headers.append('verify-token',token)
    options.headers=headers
  }
  return options
}
store(adminid:any,password:any){
  const body={    
   adminid,
   password
  }
  return this.http.post(`${this.BASE_URL}/admin/admin`,body)
}
userdiet(userid:any){
  return this.http.get(`${this.BASE_URL}/diet/`+userid,this.appendtoken())

}
table(){
  return this.http.get<any>(`${this.BASE_URL}/admin/collection`)
}

getallworkouts(){
  return this.http.get(`${this.BASE_URL}/workout`)
}
viewaproduct(id:any){
  return this.http.get(`${this.BASE_URL}/userworkout/${id}`)
}
adminmeal(){
 
//post type request
return this.http.get(`${this.BASE_URL}/meals`)
}
trainer(){
  return this.http.get(`${this.BASE_URL}/trainer`)
}
}
