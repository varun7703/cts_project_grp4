import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  books: Array<any> = [];
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080'+'/all').subscribe((response:any)=>{
      
      this.books = response;
      console.log('books array',this.books);
    })
  }
goprod(id:any){console.log(id)
this.router.navigateByUrl('/product/'+id)
}
}
