import { Component, OnInit } from '@angular/core';
// import 'material-icons/iconfont/material-icons.css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin = true;
  constructor() { }

  ngOnInit(): void {
  }

}
