import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-details-form',
  templateUrl: './vehicle-details-form.component.html',
  styleUrls: ['./vehicle-details-form.component.css']
})
export class VehicleDetailsFormComponent implements OnInit {
  vehicleDetails!:FormGroup;
  @Input() currentFormIndex = 0;

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
    
    this.vehicleDetails= this.fb.group({
      carMake:['', Validators.required, Validators.minLength(2)],
      carModel:['', Validators.required, Validators.minLength(2)],
      exShowroomPrice:['', Validators.required],
      onRoadPrice:['', Validators.required]
    });
  }

}
