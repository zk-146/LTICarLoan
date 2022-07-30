import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-signin-button',
  templateUrl: './register-signin-button.component.html',
  styleUrls: ['./register-signin-button.component.css']
})
export class RegisterSigninButtonComponent implements OnInit {

  constructor() { }

  toggle = "register";

onClickToggle(clickedBtn:string){
  this.toggle=clickedBtn;
}

  ngOnInit(): void {
  }

}
