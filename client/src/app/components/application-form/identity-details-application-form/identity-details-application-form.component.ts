import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-identity-details-application-form',
  templateUrl: './identity-details-application-form.component.html',
  styleUrls: ['./identity-details-application-form.component.css']
})
export class IdentityDetailsApplicationFormComponent implements OnInit {
  identityDetails!:FormGroup;
  @Input() currentFormIndex=0;

  identityDetailsObject = {
    name: "Identity Details",
    fields: [
      {
        label: "Loan Amount",
        placeholder: "Eg. ₹200000",
        inputType: "text",
        value: 'loanAmount',
        error: '',
      },
      {
        label: "Loan Tenure",
        placeholder: "",
        inputType: "text",
        value: 'lastName',
        error: '',
      },
      {
        label: "Rate of interest",
        placeholder: "",
        inputType: "number",
        value: 'rateOfInterest',
        error: '',
      },
    ],
  };
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.identityDetails=this.fb.group({
      loanAmount:['', Validators.required],
      lastName:['', Validators.required],
      rateOfInterest:['', Validators.required],
    });
    
  }


}
