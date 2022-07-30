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
  currentFormIndex:number = 0;
  formAlreadyFilled:boolean = false;
  formSuccess:boolean = false;

  constructor(private vehicleDetailServ: VehicleHttpClientService) { }

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
    this.addVehicle();
  }

  ngOnInit(): void {
    this.getVehicle();
  }

  getVehicle(): void {
    this.vehicleDetailServ.getVehicle(101).subscribe(response=> {
      console.log(response);
      if(response)
        this.formAlreadyFilled=true;
    })
  }

  addVehicle() {
    let vehicleData = localStorage.getItem("vehicleDetails");
    vehicleData = JSON.parse(vehicleData || "");
    this.vehicleDetailServ.addVehicle(vehicleData).subscribe(response=> {
      if(response)
        this.formSuccess=true;
    })
  }
}
