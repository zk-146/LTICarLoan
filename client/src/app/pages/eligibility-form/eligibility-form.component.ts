import { VehicleHttpClientService } from './../../services/vehicle-http-client.service';
import { AuthHttpClientService } from './../../services/auth-http-client.service';
import { EligibilityFormHttpClientService } from './../../services/eligibility-form-http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-form',
  templateUrl: './eligibility-form.component.html',
  styleUrls: ['./eligibility-form.component.css']
})

export class EligibilityFormComponent implements OnInit {
  currentFormIndex = 0;

  constructor(private eligibilityFormServ:EligibilityFormHttpClientService, private authServ: AuthHttpClientService, private vehicleDetailServ: VehicleHttpClientService) { }

  // updateFormValue= (titleIndex:number, fieldIndex:number, value:any)=> {
    // this.formDetails[titleIndex].fields[fieldIndex].value = value;
    // console.log(this.vehicleDetails);
  // }

  // increaseCurrentIndex = (formDetails:any) => {
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

  decreaseCurrentIndex = () => {
    this.currentFormIndex--;
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  onSubmit = () => {
    // this.addVehicle();
  }

  personalDetails:any;
  contactDetails:any;

  getUserDetails() {
    const id = parseInt(localStorage.getItem("userId")|| "") || 101;
    this.authServ.getUserDetails(id).subscribe(response=> {
      this.personalDetails = response;
      this.contactDetails = response;
    })
  }
  
  addVehicle() {
    const vehicle = localStorage.getItem("vehileDetails");
    this.vehicleDetailServ.addVehicle(vehicle).subscribe(response=> {
      // this.vehicleDetails = response;
      console.log(response)
    })
  }

  // getVehicleDetails(id=:number) {
  //   this.
  // }
}
