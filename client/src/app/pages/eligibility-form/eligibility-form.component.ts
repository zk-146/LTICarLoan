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
          value: ''
        },
        {
          label: "Car Model",
          placeholder: "Eg. Nissan X39-O2",
          inputType: "text",
          value: ''
        },
        {
          label: "Ex showroom Price",
          placeholder: "$77890",
          inputType: "number",
          value: ''
        },
        {
          label: "On Road Price",
          placeholder: "$80530",
          inputType: "number",
          value: ''
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
          value: ''
        },
        {
          label: "Second Name",
          placeholder: "Eg. Doe",
          inputType: "text",
          value: ''
        },
        {
          label: "Age",
          placeholder: "Eg. 21",
          inputType: "number",
          value: ''
        },
        {
          label: "Gender",
          placeholder: "Eg. Male",
          inputType: "text",
          value: ''
        },
        {
          label: "Type of employment",
          placeholder: "$80530",
          inputType: "number",
          value: ''
        },
        {
          label: "Yearly Salary",
          placeholder: "$77000",
          inputType: "number",
          value: ''
        },
        {
          label: "Exisitng EMI",
          placeholder: "Yes",
          inputType: "text",
          value: ''
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
          value: ''
        },
        {
          label: "Email",
          placeholder: "Email",
          inputType: "email",
          value: ''
        },
      ],
    }
  ]

  currentFormIndex = 0;

  constructor() { }

  updateFormValue= (titleIndex:any, fieldIndex:any, value:any)=> {
    this.formDetails[titleIndex].fields[fieldIndex].value=value;
  }

  increaseCurrentIndex = () => {
    this.currentFormIndex++;
    console.log(this.formDetails)
  }

  ngOnInit(): void {
  }

}
