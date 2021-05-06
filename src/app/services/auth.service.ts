import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private router:Router) { }
token:any;
  public login(username: string, password: string) {
    console.log('data in service ',username,password)
    let body = {
      username:username,
      password:password
    }
    this.http.post(AUTH_API + '/signin',body).subscribe((response:any)=>{
      console.log(response);
      if (response['status'] == 200) {
            
          
        this.token=response['token'];
        
        localStorage.setItem('token',response['token']);
        localStorage.setItem('id',response['id']);
      alert('you haver successfully login')
      this.router.navigateByUrl('/');
      }
      else {
        alert("Login Failed")
      
      }
              
        });
  }

  public register(username: string, email: string, password: string) {
    console.log('data in service ',username,password,email)
    
    let body = {
      username:username,
      password:password,
      email:email
    }
     this.http.post(AUTH_API + '/signup',body).subscribe((response:any)=>{
  console.log(response);
  
  if(response['status']==500){
    alert('you have already registered')
    this.router.navigateByUrl('/login');
  }
  else{
    alert('registration Successful');
    this.router.navigateByUrl('/login');
  }
          
    });
  }
}