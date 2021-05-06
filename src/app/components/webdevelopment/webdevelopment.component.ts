import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webdevelopment',
  templateUrl: './webdevelopment.component.html',
  styleUrls: ['./webdevelopment.component.css']
})
export class WebdevelopmentComponent implements OnInit {
  books: Array<any> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080'+'/webdevelopment').subscribe((response:any)=>{
      
      this.books = response;
      console.log('books array',this.books);
    })
  }

}
