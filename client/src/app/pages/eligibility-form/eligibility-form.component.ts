import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eligibility-form',
  templateUrl: './eligibility-form.component.html',
  styleUrls: ['./eligibility-form.component.css']
})

export class EligibilityFormComponent implements OnInit {

  vehicleDetails!:FormGroup;

  formDetails = [
    {
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
    },
    {
      name: "Personal Details",
      fields: [
        {
          label: "First Name",
          placeholder: "Eg. John",
          inputType: "text",
          value: 'firstName',
          error: '',
        },
        {
          label: "Last Name",
          placeholder: "Eg. Doe",
          inputType: "text",
          value: 'lastName',
          error: '',
        },
        {
          label: "Age",
          placeholder: "Eg. 21",
          inputType: "number",
          value: 'age',
          error: '',
        },
        {
          label: "Gender",
          placeholder: "Eg. Male",
          inputType: "text",
          value: 'gender',
          error: '',
        },
        {
          label: "Type of employment",
          placeholder: "$80530",
          inputType: "number",
          value: 'typeOfEmployment',
          error: '',
        },
        {
          label: "Yearly Salary",
          placeholder: "$77000",
          inputType: "number",
          value: 'yearlySalary',
          error: '',
        },
        {
          label: "Exisitng EMI",
          placeholder: "Yes",
          inputType: "text",
          value: 'exisitingEMI',
          error: '',
          options: true,
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
          value: 'phoneNumber',
          error: '',
        },
        {
          label: "Email",
          placeholder: "Email",
          inputType: "email",
          value: 'email',
          error: '',
        },
      ],
    }
  ]

  currentFormIndex = 0;

  constructor(private fb: FormBuilder) { }

  // updateFormValue= (titleIndex:number, fieldIndex:number, value:any)=> {
    // this.formDetails[titleIndex].fields[fieldIndex].value = value;
    // console.log(this.vehicleDetails);
  // }

  increaseCurrentIndex = () => {
    const formDetail = this.formDetails[this.currentFormIndex].fields;
    let proceed = true;
    for(let i = 0; i < formDetail.length; i++) {
      if(formDetail[i].value=="") {
        formDetail[i].error= formDetail[i].label + " is required";
        proceed = false;
      }
      else {
        formDetail[i].error="";
      }
    }
    if(proceed)
      this.currentFormIndex++;
  }

  decreaseCurrentIndex = () => {
    this.currentFormIndex--;
    console.log(this.formDetails)
  }

  ngOnInit(): void {
    this.vehicleDetails= this.fb.group({
      carMake:['', Validators.required],
      carModel:['', Validators.required],
      exShowroomPrice:['', Validators.required],
      onRoadPrice:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      age:['', Validators.required],
      gender:['', Validators.required],
      typeOfEmployment:['', Validators.required],
      yearlySalary:['', Validators.required],
      exisitingEMI:['', Validators.required],
      phoneNumber:['', Validators.required],
      email:['', Validators.required],
    });
  }
}
