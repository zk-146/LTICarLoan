import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserpersonalHttpClientService } from '../../Services/userpersonal-http-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentFormIndex:number = 0;
  formSuccess:boolean = false;

  constructor(private userPersonalDetailServ: UserpersonalHttpClientService) { }

  increaseCurrentIndex = () => {
    let proceed = true;
    if(proceed)
      this.currentFormIndex++;

  }
  decreaseCurrentIndex = () => {
    this.currentFormIndex--;
  }

  onSubmit() {
    this.addUserPersonal();
  }

  ngOnInit(): void {
  }

  addUserPersonal() {
    let userPersonalData = localStorage.getItem("userPersonalDetails");
    userPersonalData = JSON.parse(userPersonalData || "");
    this.userPersonalDetailServ.addUserPersonal(userPersonalData).subscribe(response=> {
      if(response)
        this.formSuccess=true;
    })
  }


}
//   userPersonalDetails!:FormGroup;

//   currentFormIndex = 0;

//   constructor(private fb: FormBuilder) { }

//   increaseCurrentIndex = () => {
//     let proceed = true;
//     if(proceed)
//       this.currentFormIndex++;

//   }

//   decreaseCurrentIndex = () => {
//     this.currentFormIndex--;
//   }
  
//   ngOnInit(): void {
//   }
// }
