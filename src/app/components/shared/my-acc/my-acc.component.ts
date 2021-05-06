import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-acc',
  templateUrl: './my-acc.component.html',
  styleUrls: ['./my-acc.component.css']
})
export class MyAccComponent implements OnInit {
books1:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let body = {
      uid : localStorage.getItem('id')
    }
    this.http.post('http://localhost:8080'+'/myaccount',body).subscribe((response:any)=>{
      
      this.books1 = response;
      console.log('user data',this.books1.name);
    })
  }

}
