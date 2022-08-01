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
          value: 'typeofemp',
          error: '',
        },
        {
          label: "Annual Salary",
          placeholder: "$$$$$",
          inputType: "number",
          value: 'annualsal',
          error: '',
        },
      ],
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.employmentDetails=this.fb.group({
      typeofemp:['', Validators.required],
      annualsal:['', Validators.required]
    });
  }

  onInputChange = () => {
    let employmentData = new EmploymentDetails("", 0);
    console.log(employmentData, this.employmentDetails.get('typeofemp')?.value)
    employmentData[`typeofemp`] = this.employmentDetails.get(`typeofemp`)?.value;
    employmentData[`annualsal`] = this.employmentDetails.get(`annualsal`)?.value;
    localStorage.setItem("employmentDetails", JSON.stringify(employmentData));
  }
}
