import { AuthHttpClientService } from './../../services/auth-http-client.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginAsAdmin:boolean = false;


  loginForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginServ: AuthHttpClientService, private router: Router ) { }

  toggle = "signin";

onClickToggle(clickedBtn:string){
  this.toggle=clickedBtn;
  
}

  ngOnInit(): void {

    this.loginForm=this.fb.group({
      email:['',Validators.required,Validators.email],
      password:['',Validators.required,Validators.min(4),Validators.max(8)]
    })

  }

  onLoginClick = () => {
    this.loginServ.userLogin(this.loginForm.get(`email`)?.value, this.loginForm.get(`password`)?.value, this.loginAsAdmin).subscribe(response=>{
        console.log(response);
        localStorage.setItem('user_data', JSON.stringify(response));
        this.router.navigate(['user-dashboard']);
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

  public onSubmit(){
   
   

  }
}
