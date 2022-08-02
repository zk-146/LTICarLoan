import { Component, OnInit } from '@angular/core';
// import 'material-icons/iconfont/material-icons.css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin = JSON.parse(localStorage.getItem('isAdmin')|| 'false');
  userLoggedIn = JSON.parse(localStorage.getItem('user_personal_details') || localStorage.getItem('user_data') || "null") !== null ? true : false;
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('isAdmin')|| 'false') );
    this.isAdmin = JSON.parse(localStorage.getItem('isAdmin')|| 'false');
    this.userLoggedIn = JSON.parse(localStorage.getItem('user_personal_details') || localStorage.getItem('user_data') || "null") !== null ? true : false;
  }

  logout = () => {
    localStorage.removeItem('user_personal_details');
    localStorage.removeItem('user_data');
    localStorage.removeItem('contactDetails');
    localStorage.removeItem('personalDetails');
    localStorage.removeItem('vehicleDetails');
    localStorage.removeItem('a.application_id');
    localStorage.removeItem('application_data');
    localStorage.removeItem('editContactId');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('empNo');
    localStorage.removeItem('editEmployeeId');
  }

}
