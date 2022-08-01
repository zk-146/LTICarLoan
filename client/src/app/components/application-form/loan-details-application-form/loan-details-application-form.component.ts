import { LoanOfferHttpClientService } from './../../../services/loan-offer-http-client.service';
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
        label: "Vehicle Type",
        placeholder: "Eg. Four wheeler",
        inputType: "text",
        value: 'loan_type',
        error: '',
      },
      {
        label: "Loan Amount",
        placeholder: "Eg. ₹200000",
        inputType: "text",
        value: 'loan_amt',
        error: '',
      },
      {
        label: "Loan Tenure",
        placeholder: "Eg. 36 Months",
        inputType: "number",
        value: 'no_of_emi',
        error: '',
      },
      {
        label: "Rate of interest",
        placeholder: "",
        inputType: "number",
        value: 'interest_rate',
        error: '',
      },
      {
        label: "Processing Fee",
        placeholder: "",
        inputType: "number",
        value: 'processing_fee',
        error: '',
      },
    ],
  };
  
  constructor(private fb: FormBuilder,private loanOfferServ: LoanOfferHttpClientService) { }

  ngOnInit(): void {
    
    this.loanDetails=this.fb.group({
      loan_type: ['', Validators.required],
      loan_amt: ['', Validators.required],
      no_of_emi: ['', Validators.required],
      interest_rate: ['', Validators.required],
      processing_fee: ['', Validators.required],
    });
    this.getLoanOffer();
  }

  getLoanOffer() {
    this.loanOfferServ.getLoanOffer().subscribe(response=> {
      console.log(response);
      this.loanDetails=this.fb.group({
        loan_type: [response.loan_type, Validators.required],
        loan_amt: [response.loan_amt, Validators.required],
        no_of_emi: [response.no_of_emi, Validators.required],
        interest_rate: [response.interest_rate, Validators.required],
        processing_fee: [response.processing_fee, Validators.required],
      });
      localStorage.setItem("loan_details", JSON.stringify(response));
    });
  }

}
