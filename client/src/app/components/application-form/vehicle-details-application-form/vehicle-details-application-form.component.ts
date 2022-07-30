import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

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
        label: "Car Make",
        placeholder: "Eg. Nissan",
        inputType: "text",
        value: 'carMake',
        error: '',
      },
      {
        label: "Car Model",
        placeholder: "Eg. Nissan X39-O2",
        inputType: "text",
        value: 'carModel',
        error: '',
      },
      {
        label: "Ex showroom Price",
        placeholder: "$77890",
        inputType: "number",
        value: 'exShowroomPrice',
        error: '',
      },
      {
        label: "On Road Price",
        placeholder: "$80530",
        inputType: "number",
        value: 'onRoadPrice',
        error: '',
      },
    ],
  };
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.vehicleDetails=this.fb.group({
      carMake:['', Validators.required],
      carModel:['', Validators.required],
      exShowroomPrice:['', Validators.required],
      onRoadPrice:['', Validators.required],
    });
  }


}
