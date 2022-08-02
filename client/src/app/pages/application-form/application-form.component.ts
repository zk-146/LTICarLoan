import { Router } from '@angular/router';
import { ApplicationHttpClientService } from './../../services/application-http-client.service';
import { Component, OnInit } from '@angular/core';
import { ApplicationForm } from './ApplicationForm';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})

export class ApplicationFormComponent implements OnInit {
  currentFormIndex = 0;
  formAlreadyFilled:boolean = false;
  formSuccess:boolean = false;
  formSubmitted:boolean = false;

  constructor(private applicationServ: ApplicationHttpClientService, private router: Router) { }

  ngOnInit(): void {
    this.getApplicationForm();
  }

  increaseCurrentIndex = () => {
    let proceed = true;
    // for(let i = 0; i < formDetails!.length; i++) {
    //   if(formDetails![i].value=="") {
    //     formDetails![i].error= formDetails![i].label + " is required";
    //     proceed = false;
    //   }
    //   else {
    //     formDetails![i].error="";
    //   }
    // }
    if(proceed)
      this.currentFormIndex++;

  }

  submitApplicationForm = () => {
    let loanDetails = JSON.parse(localStorage.getItem("loan_details")|| "");
    console.log(loanDetails);
    let userDetails = JSON.parse(localStorage.getItem("user_data")|| "");
    let applicationData = new ApplicationForm(loanDetails.loan_amt/48, loanDetails.no_of_emi, loanDetails.loan_amt, loanDetails.loan_tenure, "pending", userDetails.user_id);
    console.log("APPLICATIONDATA", applicationData);
    this.applicationServ.addApplication(applicationData).subscribe(response => console.log(response));
    this.formSubmitted = true;
    this.formSuccess = true;
    this.router.navigate(['user-dashboard']);
  }

  getApplicationForm = () => {
    this.applicationServ.getApplicationByUserId().subscribe(response => {
      console.log(response)
      if(response.length>0) this.formAlreadyFilled = true;
    });
  }

  decreaseCurrentIndex = () => {
    this.currentFormIndex--;
  }

}
