import { LoginFormHttpClientService } from './../../services/login-form-http-client.service';
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

  constructor(private fb:FormBuilder, private loginServ: LoginFormHttpClientService ) { }

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

  public onSubmit(){
   
   

  }
}
