import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-form',
  templateUrl: './eligibility-form.component.html',
  styleUrls: ['./eligibility-form.component.css']
})

export class EligibilityFormComponent implements OnInit {
  formDetails = [
    {
      name: "Vehicle Details",
      fields: [
        {
          label: "Car Make",
          placeholder: "Eg. Nissan",
          inputType: "text",
        },
        {
          label: "Car Model",
          placeholder: "Eg. Nissan X39-O2",
          inputType: "text",
        },
        {
          label: "Ex showroom Price",
          placeholder: "$77890",
          inputType: "number",
        },
        {
          label: "On Road Price",
          placeholder: "$80530",
          inputType: "number",
        },
      ],
    },
    {
      name: "Personal Details",
      fields: [
        {
          label: "First Name",
          placeholder: "Eg. John",
          inputType: "text",
        },
        {
          label: "Second Name",
          placeholder: "Eg. Doe",
          inputType: "text",
        },
        {
          label: "Age",
          placeholder: "Eg. 21",
          inputType: "number",
        },
        {
          label: "Gender",
          placeholder: "Eg. Male",
          inputType: "text",
        },
        {
          label: "Type of employment",
          placeholder: "$80530",
          inputType: "number",
        },
        {
          label: "Yearly Salary",
          placeholder: "$77000",
          inputType: "number",
        },
        {
          label: "Exisitng EMI",
          placeholder: "Yes",
          inputType: "text",
        },
      ],
    },
    {
      name: "Contact Details",
      fields: [
        {
          label: "Phone Number",
          placeholder: "Eg. 7718964516",
          inputType: "number",
        },
        {
          label: "Email",
          placeholder: "Email",
          inputType: "email",
        },
      ],
    }
  ]

  currentFormIndex = 0;
  
  constructor() { }

  increaseCurrentIndex = () => {
    this.currentFormIndex++;
  }

  ngOnInit(): void {
  }

}
