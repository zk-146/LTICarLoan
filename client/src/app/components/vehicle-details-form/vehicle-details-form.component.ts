import { VehicleDetails } from './Vehicle';
import { VehicleHttpClientService } from './../../services/vehicle-http-client.service';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-details-form',
  templateUrl: './vehicle-details-form.component.html',
  styleUrls: ['./vehicle-details-form.component.css']
})
export class VehicleDetailsFormComponent implements OnInit {
  vehicleDetails!:FormGroup;
  @Input() currentFormIndex = 0;
  @Input() vehicleDetailsFilled = false;

  vehicleDetailsObject = {
    name: "Vehicle Details",
    fields: [
      {
        label: "Company Name",
        placeholder: "Eg. Nissan",
        inputType: "text",
        value: 'company_name',
        error: '',
      },
      {
        label: "Model Name",
        placeholder: "Eg. Nissan X39-02",
        inputType: "text",
        value: 'model_name',
        error: '',
      },
      {
        label: "Price",
        placeholder: "₹77890",
        inputType: "number",
        value: 'price',
        error: '',
      },
    ],
  };
  
  
  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vehicleDetails = this.rootFormGroup.control;
  }

  get vehicleDetailsControl() {
    return this.vehicleDetails.controls;
  }

  onInputChange = () => {
    let user = JSON.parse(localStorage.getItem("user_data")|| "");
    let vehicleData = new VehicleDetails("", "", 0, user.user_id);

    console.log(vehicleData, this.vehicleDetails.get('company_name')?.value)

    vehicleData[`company_name`] = this.vehicleDetails.get(`company_name`)?.value;
    vehicleData[`model_name`] = this.vehicleDetails.get(`model_name`)?.value;
    vehicleData[`price`] = this.vehicleDetails.get(`price`)?.value;
    
    localStorage.setItem("vehicleDetails", JSON.stringify(vehicleData));
  }
}