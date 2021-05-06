import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: any;
  books: any;
   
  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient,private router:Router) {this.activatedRoute.paramMap.subscribe(params=>{
    this.id=params.get('id') 
    console.log('id in product',this.id)
}) }
  pages = "560"
  imgsrc : string = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felearningindustry.com%2Ftop-10-books-every-college-student-read&psig=AOvVaw1-KzfZpLdqa_Okp9X8Eyrs&ust=1619531596222000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjaxcmHnPACFQAAAAAdAAAAABAD'
  ngOnInit(): void {
    let body = {
      id : this.id
    }
    this.http.post('http://localhost:8080'+'/getprod',body).subscribe((response:any)=>{
      
      this.books = response;
      console.log('books array in product',this.books);
    })
  }
    
      
conforder(id1:any){
  this.router.navigateByUrl('/conforder/'+id1);
}
addwish(id2:any){
  let body ={
    bid:id2,
    id:localStorage.getItem('id')
  }
  this.http.post('http://localhost:8080'+'/mywishadd',body).subscribe((response:any)=>{
    console.log(response)
    if(response['status']==200){
      alert('added to wishlist')
    }
    else{
      if(response['status']==400){
        alert('alreading in wishlist')
      }
    }
    
  })
}
addtocart(id2:any){
  let body ={
    bid:id2,
    id:localStorage.getItem('id')
  }
  this.http.post('http://localhost:8080'+'/mycartadd',body).subscribe((response:any)=>{
    console.log(response)
    if(response['status']==200){
      alert('added to cart')
    }
    else{
      if(response['status']==400){
        alert('alreading in cart')
      }
    }
    
  })
}
}
