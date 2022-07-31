import { Component, OnInit } from '@angular/core';
import { LoginFormHttpClientService } from 'src/app/services/login-form-http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServ:LoginFormHttpClientService) { }

  ngOnInit(): void {
    this.loginServ.userLogin("Jay@gmail.com" , "Jay123").subscribe(response=>console.log(response))
  }

}
