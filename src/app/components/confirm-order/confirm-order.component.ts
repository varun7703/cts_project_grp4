import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
id1:any;
books: any;
books1: any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private http:HttpClient) {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id1=params.get('id1') 
      console.log('id in product',this.id1)
  })}

  phone = 4354644654
  addr= "abc road , xyz chowk, mno naka , pqr town 500321"
  book = "java dummies"
  amount = 500
  discount = 199
  final = this.amount - this.discount
  ngOnInit(): void {
    this.getuserdata();
    let body = {
      id : this.id1
    }
    this.http.post('http://localhost:8080'+'/getprod',body).subscribe((response:any)=>{
      
      this.books = response;
      console.log('books array in product',this.books);
    })

  }
  getuserdata(){
    let body = {
      uid : localStorage.getItem('id')
    }
    this.http.post('http://localhost:8080'+'/myaccount',body).subscribe((response:any)=>{
      
      this.books1 = response;
      console.log('user data',this.books1.name);
    })
  }
  addorder(id2:any){
    let body ={
      bid:id2,
      id:localStorage.getItem('id')
    }
    this.http.post('http://localhost:8080'+'/myorderadd',body).subscribe((response:any)=>{
      console.log(response)
      if(response['status']==200){
        alert('added to order history')
      }
      else{
        if(response['status']==400){
          alert('alreading in ordre history')
        }
      }
      
    })
  }
}

