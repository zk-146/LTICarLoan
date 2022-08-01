import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AddressDetails } from './AddressDetails';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  addressDetails!:FormGroup;
  @Input() currentFormIndex=1;

  addressFormDetailsObject={
    name: "Address Details",
      fields: [
        {
          label: "Address",
          placeholder: "address",
          inputType: "text",
          value: 'address',
          error: '',
        },
        {
          label: "City",
          placeholder: "Eg. Kolkata",
          inputType: "text",
          value: 'city',
          error: '',
        },
        {
          label: "State",
          placeholder: "Eg. West Bengal",
          inputType: "text",
          value: 'state',
          error: '',
        },
        {
          label: "Nationality",
          placeholder: "Eg. INDIAN",
          inputType: "text",
          value: 'nationality',
          error: '',
        },
        {
          label: "Pincode",
          placeholder: "Eg. 711227",
          inputType: "number",
          value: 'pincode',
          error: '',
        },
      ],
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addressDetails=this.fb.group({
      address:['', [Validators.required, Validators.minLength(2)]],
      city:['', [Validators.required, Validators.minLength(2)]],
      state:['', Validators.required],
      nationality:['', Validators.required],
      pincode:['', Validators.required],
    });
  }

  onInputChange = () => {
    let addressData = new AddressDetails("","","","",0)

    console.log(addressData, this.addressDetails.get('address')?.value)

    addressData[`address`] = this.addressDetails.get(`address`)?.value;
    addressData[`city`] = this.addressDetails.get(`city`)?.value;
    addressData[`state`] = this.addressDetails.get(`state`)?.value;
    addressData[`nationality`] = this.addressDetails.get(`nationality`)?.value;
    addressData[`pincode`] = this.addressDetails.get(`pincode`)?.value;

    localStorage.setItem("addressDetails", JSON.stringify(addressData));
  }

}
