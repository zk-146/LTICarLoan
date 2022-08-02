import { AuthHttpClientService } from './../../services/auth-http-client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressDetails } from 'app/components/address-details/AddressDetails';
import { EmploymentDetails } from 'app/components/employment-details/EmploymentDetails';
import { UserPersonalDetails } from 'app/components/user-personal-details/userPersonal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  currentFormIndex:number = 0;
  formSuccess:boolean = false;

  userPersonalDetails!:FormGroup;
  addressDetails!:FormGroup;
  employmentDetails!:FormGroup;

  allFormGroups = [this.userPersonalDetails, this.addressDetails, this.employmentDetails];


  constructor(private userPersonalDetailServ: AuthHttpClientService, private router: Router, private fb: FormBuilder) { }

  increaseCurrentIndex = () => {
    let proceed = false;
    console.log(this.userPersonalDetails)
    console.log(this.addressDetails)
    console.log(this.employmentDetails)

    if(this.userPersonalDetails.status=="VALID" && this.currentFormIndex==0)
      proceed = true;
    // if(this.currentFormIndex==0)
    
    else if(this.addressDetails.status=="VALID" && this.currentFormIndex==1)
      proceed = true;
    // if(this.currentFormIndex==1)

    if(proceed)
      this.currentFormIndex++;
  }

  decreaseCurrentIndex = () => {
    this.currentFormIndex--;
  }

  onSubmit = () => {
    if(this.employmentDetails.status=="VALID" && this.currentFormIndex==2) {
      this.addUserData();
      this.router.navigate(['/login'])
    }
  }

  ngOnInit(): void {
    this.userPersonalDetails = this.fb.group({
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      password:['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      age:['', Validators.required],
      gender:['', Validators.required]
    }); 

    this.employmentDetails=this.fb.group({
      type_of_employment:['', Validators.required],
      annual_salary:['', Validators.required]
    });

    this.addressDetails=this.fb.group({
      address:['', [Validators.required, Validators.min(8)]],
      city:['', [Validators.required, Validators.min(2)]],
      state:['', [Validators.required, Validators.min(3)]],
      nationality:['', [Validators.required, Validators.min(3)]],
      pincode:['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
    });
  }

  addUserData = () => {
    let userPersonalData = JSON.parse(localStorage.getItem("UserPersonalDetails")|| "");
    let addressData = JSON.parse(localStorage.getItem("addressDetails")|| "");
    let employmentData = JSON.parse(localStorage.getItem("employmentDetails")|| "");
    let userData = {...userPersonalData, ...addressData, ...employmentData};

    this.userPersonalDetailServ.addUserData(userData).subscribe(response=> {
      if(response)
        this.formSuccess=true;
    })
  }
}
