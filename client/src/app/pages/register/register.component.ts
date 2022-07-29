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
        },
        {
          label: "Last Name",
          placeholder: "lastName",
          inputType: "text",
        },
        {
          label: "Email ID",
          placeholder: "email",
          inputType: "email",
        },
        {
          label: "Password",
          placeholder: "password",
          inputType: "text",
        },
        {
          label: "Age",
          placeholder: "age",
          inputType: "number",
        },
        {
          label: "Gender",
          placeholder: "Male/Female",
          inputType: "text",
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
        },
        {
          label: "City",
          placeholder: "Eg. Kolkata",
          inputType: "text",
        },
        {
          label: "State",
          placeholder: "Eg. West Bengal",
          inputType: "text",
        },
        {
          label: "Nationality",
          placeholder: "Eg. INDIAN",
          inputType: "text",
        },
        {
          label: "Pincode",
          placeholder: "Eg. 711227",
          inputType: "number",
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
        },
        {
          label: "Annual Salary",
          placeholder: "$$$$$",
          inputType: "number",
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
