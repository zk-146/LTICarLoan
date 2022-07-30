import { VehicleDetails } from './../../components/vehicle-details-form/Vehicle';
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

  onSubmit() {
    const vehicleData = localStorage.getItem("vehicleDetails");
    console.log(JSON.parse(vehicleData || ""));
    this.addVehicle();
  }


  ngOnInit(): void {
  }

  
  addVehicle() {
    let vehicleData = localStorage.getItem("vehicleDetails");
    vehicleData = JSON.parse(vehicleData || "");
    this.vehicleDetailServ.addVehicle(vehicleData).subscribe(response=> {
      // this.vehicleDetails = response;
      console.log(response)
    })
  }

  // getVehicleDetails(id=:number) {
  //   this.
  // }
}
