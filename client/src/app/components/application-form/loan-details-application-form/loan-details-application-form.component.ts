import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-details-application-form',
  templateUrl: './loan-details-application-form.component.html',
  styleUrls: ['./loan-details-application-form.component.css']
})
export class LoanDetailsApplicationFormComponent implements OnInit {
  loanDetails!:FormGroup;
  @Input() currentFormIndex=0;

  loanDetailsObject = {
    name: "Loan Details",
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
    
    this.loanDetails=this.fb.group({
      loanAmount:['', Validators.required],
      lastName:['', Validators.required],
      rateOfInterest:['', Validators.required],
    });
    
  }

}
