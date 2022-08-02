import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { UserPersonalDetails } from './userPersonal';


@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: ['./user-personal-details.component.css']
})
export class UserPersonalDetailsComponent implements OnInit {

  userPersonalDetails!:FormGroup;
  @Input() currentFormIndex = 0;
  // @Output() private onFormGroupChange = new EventEmitter<any>();

  userPersonalDetailsObject={
  name: "User Personal Details",
      fields: [
        {
          label: "First Name",
          placeholder: "John",
          inputType: "text",
          value: 'first_name',
          error: '',
        },
        {
          label: "Last Name",
          placeholder: "Doe",
          inputType: "text",
          value: 'last_name',
          error: '',
        },
        {
          label: "Email Id",
          placeholder: "johndoe@example.com",
          inputType: "email",
          value: 'email',
          error: '',
        },
        {
          label: "Password",
          placeholder: "Password",
          inputType: "password",
          value: 'password',
          error: '',
        },
        {
          label: "Phone Number",
          placeholder: "9988998844",
          inputType: "number",
          value: 'phone',
          error: '',
        },
        {
          label: "Age",
          placeholder: "21",
          inputType: "number",
          value: 'age',
          error: '',
        },
        {
          label: "Gender",
          placeholder: "Male/Female",
          inputType: "text",
          value: 'gender',
          error: '',
        },
      ],
    };

  testFormGroup!:FormGroup;
  
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.userPersonalDetails = this.rootFormGroup.control
  }
  
  get userPersonalDetailsControl() {
    return this.userPersonalDetails.controls;
  }

  onInputChange = () => {
    let userPersonalData = new UserPersonalDetails("","","","",0,0,"",101)
    
    userPersonalData[`first_name`] = this.userPersonalDetails.get(`first_name`)?.value;
    userPersonalData[`last_name`] = this.userPersonalDetails.get(`last_name`)?.value;
    userPersonalData[`email`] = this.userPersonalDetails.get(`email`)?.value;
    userPersonalData[`phone`] = this.userPersonalDetails.get(`phone`)?.value;
    userPersonalData[`password`] = this.userPersonalDetails.get(`password`)?.value;
    userPersonalData[`age`] = this.userPersonalDetails.get(`age`)?.value;
    userPersonalData[`gender`] = this.userPersonalDetails.get(`gender`)?.value;
    
    localStorage.setItem("UserPersonalDetails", JSON.stringify(userPersonalData));
  }
}
