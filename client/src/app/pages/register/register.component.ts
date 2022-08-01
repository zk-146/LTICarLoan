import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressDetails } from 'app/components/address-details/AddressDetails';
import { EmploymentDetails } from 'app/components/employment-details/EmploymentDetails';
import { UserPersonalDetails } from 'app/components/user-personal-details/userPersonal';
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
    this.addUserData();
  }

  ngOnInit(): void {
  }

  addUserData() {
    
    let userPersonalData = JSON.parse(localStorage.getItem("UserPersonalDetails")|| "");
    let addressData = JSON.parse(localStorage.getItem("AddressDetails")|| "");
    let employmentData = JSON.parse(localStorage.getItem("employmentDetails")|| "");
    let userData = {...userPersonalData, ...addressData, ...employmentData};


    console.log(userData);
    // userData = JSON.parse(userData || "");
    this.userPersonalDetailServ.addUserData(userData).subscribe(response=> {
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
