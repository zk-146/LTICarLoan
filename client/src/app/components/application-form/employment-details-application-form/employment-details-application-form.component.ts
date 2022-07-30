import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-details-application-form',
  templateUrl: './employment-details-application-form.component.html',
  styleUrls: ['./employment-details-application-form.component.css']
})
export class EmploymentDetailsApplicationFormComponent implements OnInit {
  employmentDetails!:FormGroup;
  @Input() currentFormIndex = 1;

  employmentDetailsObject = {
    name: "Employment Details",
    fields: [
      {
        label: "Type Of Employment",
        placeholder: "",
        inputType: "text",
        value: 'typeOfEmployment',
        error: '',
      },
      {
        label: "Annual Salary",
        placeholder: "",
        inputType: "text",
        value: 'annualSalary',
        error: '',
      },
      {
        label: "Existing EMI",
        placeholder: "Yes or No",
        inputType: "radio",
        value: 'existingEMI',
        error: '',
        options: true,
      },
    ],
  };
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employmentDetails=this.fb.group({
      typeOfEmployment:['', Validators.required],
      annualSalary:['', Validators.required],
      existingEMI:['', Validators.required],
    });
  }


}
