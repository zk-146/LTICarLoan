import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: ['./user-personal-details.component.css']
})
export class UserPersonalDetailsComponent implements OnInit {

  userPersonalDetails!:FormGroup;
  @Input() currentFormIndex = 0;

  userPersonalDetailsObject={
  name: "User Personal Details",
      fields: [
        {
          label: "First Name",
          placeholder: "firstName",
          inputType: "text",
          value: 'firstName',
          error: '',
        },
        {
          label: "Last Name",
          placeholder: "lastName",
          inputType: "text",
          value: 'lastName',
          error: '',
        },
        {
          label: "Email ID",
          placeholder: "email",
          inputType: "email",
          value: 'email',
          error: '',
        },
        {
          label: "Password",
          placeholder: "password",
          inputType: "text",
          value: 'password',
          error: '',
        },
        {
          label: "Age",
          placeholder: "age",
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


    constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    
    this.userPersonalDetails=this.fb.group({
      firstName:['', Validators.required, Validators.minLength(2)],
      lastName:['', Validators.required, Validators.minLength(2)],
      email:['', Validators.required],
      password:['', Validators.required],
      age:['', Validators.required],
      gender:['', Validators.required]
    });
  }

}
