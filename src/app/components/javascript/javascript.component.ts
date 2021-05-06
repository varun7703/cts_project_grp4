import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  books: Array<any> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080'+'/javascript').subscribe((response:any)=>{
      
      this.books = response;
      console.log('books array',this.books);
    })
  }

}