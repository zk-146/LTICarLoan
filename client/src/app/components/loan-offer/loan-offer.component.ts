import { Router } from '@angular/router';
import { ApplicationHttpClientService } from './../../services/application-http-client.service';
import { LoanOfferHttpClientService } from './../../services/loan-offer-http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-offer',
  templateUrl: './loan-offer.component.html',
  styleUrls: ['./loan-offer.component.css']
})

export class LoanOfferComponent implements OnInit {
  loanDetails: any = (localStorage.getItem("loan_details")|| "");
  constructor(private loanOfferServ: LoanOfferHttpClientService, private applicationServ: ApplicationHttpClientService,private router:Router) { }

  ngOnInit(): void {
    // this.loanDetails = JSON.parse(this.loanDetails);
    // console.log(JSON.parse(this.loanDetails));
    this.getLoanOffer();
  }

  getLoanOffer() {
    this.loanOfferServ.getLoanOffer().subscribe(response=> {
      console.log(response);
      this.loanDetails=response;
      localStorage.setItem("loan_details", JSON.stringify(response));
    });
  }

  addApplication() {
    // let userDetails = JSON.parse(localStorage.getItem("user_data")||"");
    // let loanDetails = JSON.parse(localStorage.getItem("loan_details") || "");
    // let applicationData = {
    //     application_status: "pending",
    //     emi_amt: loanDetails.loan_amt / loanDetails.no_of_emi,
    //     loan_amt: loanDetails.loan_amt,
    //     no_of_emis: loanDetails.no_of_emi,
    //     loan_tenure: loanDetails.no_of_emi,
    //     user: {
    //         user_id: userDetails.user_id
    //     }
    // }
    // this.applicationServ.addApplication(applicationData).subscribe(response=> {
      // console.log(response);
      this.router.navigate(['application-form'])
    // })
  }

}
