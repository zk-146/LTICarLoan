import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

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
        label: "Gender",
        placeholder: "Eg. Male",
        inputType: "text",
        value: 'gender',
        error: '',
      },
      {
        label: "Type of employment",
        placeholder: "$80530",
        inputType: "number",
        value: 'typeOfEmployment',
        error: '',
      },
      {
        label: "Yearly Salary",
        placeholder: "$77000",
        inputType: "number",
        value: 'yearlySalary',
        error: '',
      },
      {
        label: "Exisitng EMI",
        placeholder: "Yes",
        inputType: "text",
        value: 'exisitingEMI',
        error: '',
        options: true,
      },
    ],
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.personalDetails=this.fb.group({
      firstName:['', [Validators.required, Validators.minLength(2)]],
      lastName:['', [Validators.required, Validators.minLength(2)]],
      age:['', Validators.required],
      gender:['', Validators.required],
      typeOfEmployment:['', Validators.required],
      yearlySalary:['', Validators.required],
      exisitingEMI:['', Validators.required]
    });
    
  }

}
