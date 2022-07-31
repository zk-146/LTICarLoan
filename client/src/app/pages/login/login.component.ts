import { LoginFormHttpClientService } from './../../services/login-form-http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginAsAdmin:boolean = false;

  constructor(private loginServ:LoginFormHttpClientService) { }

  ngOnInit(): void {
  }

  onLoginClick = () => {
    this.loginServ.userLogin("khanzaid1015@gmail.com" , "password@123", this.loginAsAdmin).subscribe(response=>{
        console.log(response);
        localStorage.setItem('user_data', JSON.stringify(response));
        if(this.loginAsAdmin) localStorage.setItem('isAdmin', 'true');
        else localStorage.setItem('isAdmin', 'false')
        this.ngOnInit();
      }
    )
  }

  changeLoginToAdmin = (isChecked:any) => {
    console.log(isChecked.value)
    this.loginAsAdmin = isChecked.value==="on" ? true:false;
  }

}
