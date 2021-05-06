import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  constructor(private http:HttpClient) { }
  books: Array<any> = [];
  books1: Array<any> = [];

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
  remove(id2:any){
    let body ={
      bid:id2,
      id:localStorage.getItem('id')
    }
    this.http.post('http://localhost:8080'+'/mywishdel',body).subscribe((response:any)=>{
      console.log(response)
      this.books1.push(response);
      
    })
    this.ngOnInit();
  }
}
