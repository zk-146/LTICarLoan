import { UserDetails } from './../User';
import { PersonalDetails } from './PersonalDetails';
import { AuthHttpClientService } from './../../services/auth-http-client.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.css']
})
export class PersonalDetailsFormComponent implements OnInit {
  personalDetails!:FormGroup;
  @Input() currentFormIndex=1;

  personalDetailsObject = {
    name: "Personal Details",
    fields: [
      {
        label: "First Name",
        placeholder: "Eg. John",
        inputType: "text",
        value: 'first_name',
        error: '',
      },
      {
        label: "Last Name",
        placeholder: "Eg. Doe",
        inputType: "text",
        value: 'last_name',
        error: '',
      },
      {
        label: "Age",
        placeholder: "Eg. 21",
        inputType: "number",
        value: 'age',
        error: '',
      },
      {
        label: "Gender",
        placeholder: "Eg. Male",
        inputType: "text",
        value: 'gender',
        error: '',
      },
      {
        label: "Type of employment",
        placeholder: "Eg. Permanent or Temporary",
        inputType: "text",
        value: 'type_of_employment',
        error: '',
      },
      {
        label: "Yearly Salary",
        placeholder: "$77000",
        inputType: "number",
        value: 'yearly_salary',
        error: '',
      },
      {
        label: "Exisitng EMI",
        placeholder: "Yes",
        inputType: "text",
        value: 'exisiting_emi',
        error: '',
        options: true,
      },
    ],
  };

  fetchedPersonalData= new UserDetails("", "", 0, "", "", 0, "", "", "", "", "", "", 0);

  constructor(private fb: FormBuilder, private authServ: AuthHttpClientService) { }

  ngOnInit(): void {
    this.personalDetails=this.fb.group({
      first_name: [this.fetchedPersonalData.first_name, Validators.required],
      last_name: [this.fetchedPersonalData.last_name, Validators.required],
      age: [this.fetchedPersonalData.age, Validators.required],
      gender: [this.fetchedPersonalData.gender, Validators.required],
      type_of_employment: [this.fetchedPersonalData.type_of_employment, Validators.required],
      yearly_salary: [this.fetchedPersonalData.yearly_salary, Validators.required],
      exisiting_emi: [this.fetchedPersonalData.exisiting_emi, Validators.required],
    });
    this.getUserDetails();
  }
  
  getUserDetails = () => {
    const id = 101;
    this.authServ.getUserDetails(id).subscribe(response=> {
      console.log(response);
      this.fetchedPersonalData = response;
      
      this.personalDetails=this.fb.group({
        first_name: [this.fetchedPersonalData.first_name, Validators.required],
        last_name: [this.fetchedPersonalData.last_name, Validators.required],
        age: [this.fetchedPersonalData.age, Validators.required],
        gender: [this.fetchedPersonalData.gender, Validators.required],
        type_of_employment: [this.fetchedPersonalData.type_of_employment, Validators.required],
        yearly_salary: [this.fetchedPersonalData.yearly_salary, Validators.required],
        exisiting_emi: [this.fetchedPersonalData.exisiting_emi, Validators.required],
      });

      console.log(this.fetchedPersonalData, this.personalDetails);
    })
  }

  onInputChange = () => {
    let personalData = new PersonalDetails("", "", 0, "", "", 0, "");
    console.log(personalData, this.personalDetails.get('company_name')?.value)
    personalData[`age`] = this.personalDetails.get(`age`)?.value;
    personalData[`exisiting_emi`] = this.personalDetails.get(`exisiting_emi`)?.value;
    personalData[`first_name`] = this.personalDetails.get(`first_name`)?.value;
    personalData[`last_name`] = this.personalDetails.get(`last_name`)?.value;
    personalData[`gender`] = this.personalDetails.get(`gender`)?.value;
    personalData[`type_of_employment`] = this.personalDetails.get(`type_of_employment`)?.value;
    personalData[`yearly_salary`] = this.personalDetails.get(`yearly_salary`)?.value;
    localStorage.setItem("personalDetails", JSON.stringify(personalData));
  }

}
