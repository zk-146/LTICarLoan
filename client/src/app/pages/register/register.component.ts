import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formDetails = [
    {
      name: "User Personal Details",
      fields: [
        {
          label: "First Name",
          placeholder: "firstName",
          inputType: "text",
          value: ''
        },
        {
          label: "Last Name",
          placeholder: "lastName",
          inputType: "text",
          value: ''
        },
        {
          label: "Email ID",
          placeholder: "email",
          inputType: "email",
          value: ''
        },
        {
          label: "Password",
          placeholder: "password",
          inputType: "text",
          value: ''
        },
        {
          label: "Age",
          placeholder: "age",
          inputType: "number",
          value: ''
        },
        {
          label: "Gender",
          placeholder: "Male/Female",
          inputType: "text",
          value: ''
        },
      ],
    },
    {
      name: "Address Details",
      fields: [
        {
          label: "Address",
          placeholder: "address",
          inputType: "text",
          value: ''
        },
        {
          label: "City",
          placeholder: "Eg. Kolkata",
          inputType: "text",
          value: ''
        },
        {
          label: "State",
          placeholder: "Eg. West Bengal",
          inputType: "text",
          value: ''
        },
        {
          label: "Nationality",
          placeholder: "Eg. INDIAN",
          inputType: "text",
          value: ''
        },
        {
          label: "Pincode",
          placeholder: "Eg. 711227",
          inputType: "number",
          value: ''
        },
      ],
    },
    {
      name: "Employments Details",
      fields: [
        {
          label: "Type of Employment",
          placeholder: "Permanent/Temporary",
          inputType: "text",
          value: ''
        },
        {
          label: "Annual Salary",
          placeholder: "$$$$$",
          inputType: "number",
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
  }

  decreaseCurrentIndex = () => {
    this.currentFormIndex--;
    console.log(this.formDetails)
  }

  ngOnInit(): void {
  }

}
