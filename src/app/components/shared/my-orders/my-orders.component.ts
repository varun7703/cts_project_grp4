import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent  {
  books: Array<any> = [];
  books1: Array<any> = [];
  constructor(private http: HttpClient) { 
    
  }

   
ngOnInit(): void {
  let body ={
    id: localStorage.getItem('id')
  }
  this.http.post('http://localhost:8080'+'/mywish1',body).subscribe((response:any)=>{
    
    this.books = response;
    for(var id1 of response){console.log("ids in for loop",id1)
    let body1 ={
      id:id1
    }
    this.http.post('http://localhost:8080'+'/mywish2',body1).subscribe((response:any)=>{
      console.log(response)
      this.books1.push(response);
    })
  }
  console.log("result to be seen by user",this.books1)  
    console.log('books mostpop array',this.books);
  })
}
}
