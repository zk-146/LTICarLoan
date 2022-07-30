import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details-application-form',
  templateUrl: './personal-details-application-form.component.html',
  styleUrls: ['./personal-details-application-form.component.css']
})
export class PersonalDetailsApplicationFormComponent implements OnInit {
  personalDetails!:FormGroup;
  @Input() currentFormIndex=0;

  personalDetailsObject = {
    name: "Personal Details",
    fields: [
      {
        label: "First Name",
        placeholder: "Eg. John",
        inputType: "text",
        value: 'firstName',
        error: '',
      },
      {
        label: "Last Name",
        placeholder: "Eg. Doe",
        inputType: "text",
        value: 'lastName',
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
        label: "Mobile",
        placeholder: "Eg. 7718964516",
        inputType: "number",
        value: 'mobile',
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
        label: "Email",
        placeholder: "eg. abc@abc.com",
        inputType: "email",
        value: 'email',
        error: '',
      },
      {
        label: "Address",
        placeholder: "Type your complete address here...",
        inputType: "text",
        value: 'address',
        error: '',
      },
      {
        label: "State",
        placeholder: "Eg. Maharashtra",
        inputType: "text",
        value: 'state',
        error: '',
      },
      {
        label: "City",
        placeholder: "Eg. Mumbai",
        inputType: "text",
        value: 'city',
        error: '',
      },
      {
        label: "Zip code",
        placeholder: "400022",
        inputType: "number",
        value: 'zipcode',
        error: '',
      },
    ],
  };
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.personalDetails=this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      age:['', Validators.required],
      mobile:['', Validators.required],
      gender:['', Validators.required],
      email:['', Validators.required],
      address:['', Validators.required],
      state:['', Validators.required],
      city:['', Validators.required],
      zipcode:['', Validators.required],
    });
    
  }

}
