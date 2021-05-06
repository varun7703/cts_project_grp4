import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  url="./assets/LOGO_resize.png";
  constructor() { }

  ngOnInit(): void {
  }

}
