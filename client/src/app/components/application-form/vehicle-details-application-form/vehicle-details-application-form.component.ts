import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { VehicleHttpClientService } from 'app/services/vehicle-http-client.service';

@Component({
  selector: 'app-vehicle-details-application-form',
  templateUrl: './vehicle-details-application-form.component.html',
  styleUrls: ['./vehicle-details-application-form.component.css']
})
export class VehicleDetailsApplicationFormComponent implements OnInit {

  vehicleDetails!:FormGroup;
  @Input() currentFormIndex = 1;

  vehicleDetailsObject = {
    name: "Vehicle Details",
    fields: [
      {
        label: "Car Model",
        placeholder: "Eg. Nissan X39-O2",
        inputType: "text",
        value: 'company_name',
        error: '',
      },
      {
        label: "Car Make",
        placeholder: "Eg. Nissan",
        inputType: "text",
        value: 'model_name',
        error: '',
      },
      {
        label: "Price",
        placeholder: "$77890",
        inputType: "number",
        value: 'price',
        error: '',
      },
    ],
  };
  
  constructor(private fb: FormBuilder, private vehicleDetailServ: VehicleHttpClientService) { }

  ngOnInit(): void {
    this.vehicleDetails=this.fb.group({
      company_name:['', Validators.required],
      model_name:['', Validators.required],
      price:['', Validators.required],
    });
    this.getVehicle();
  }
  
  getVehicle(): void {
    this.vehicleDetailServ.getVehicle(116).subscribe(response=> {
      console.log(response);
      if(response)
        this.vehicleDetails=this.fb.group({
          company_name:[response.company_name, Validators.required],
          model_name:[response.model_name, Validators.required],
          price:[response.price, Validators.required],
        });
    })
  }

}
