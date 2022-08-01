import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmploymentDetails } from './EmploymentDetails';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {

  employmentDetails!:FormGroup;
  @Input() currentFormIndex = 2;

  employmentDetailsObject =  {

    name: "Employments Details",
      fields: [
        {
          label: "Type of Employment",
          placeholder: "Permanent/Temporary",
          inputType: "text",
          value: 'type_of_employment',
          error: '',
        },
        {
          label: "Annual Salary",
          placeholder: "$$$$$",
          inputType: "number",
          value: 'annual_salary',
          error: '',
        },
      ],
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.employmentDetails=this.fb.group({
      type_of_employment:['', Validators.required],
      annual_salary:['', Validators.required]
    });
  }

  onInputChange = () => {
    let employmentData = new EmploymentDetails("", 0);
    console.log(employmentData, this.employmentDetails.get('type_of_employment')?.value)
    employmentData[`type_of_employment`] = this.employmentDetails.get(`type_of_employment`)?.value;
    employmentData[`annual_salary`] = this.employmentDetails.get(`annual_salary`)?.value;
    localStorage.setItem("employmentDetails", JSON.stringify(employmentData));
  }
}
