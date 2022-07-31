import { AuthHttpClientService } from './../../../services/auth-http-client.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from 'app/components/User';

@Component({
  selector: 'app-personal-details-application-form',
  templateUrl: './personal-details-application-form.component.html',
  styleUrls: ['./personal-details-application-form.component.css']
})
export class PersonalDetailsApplicationFormComponent implements OnInit {
  personalDetails!:FormGroup;
  @Input() currentFormIndex=0;

  personalDetailsObject = {
    name: "Personal Details",
    fields: [
      {
        label: "First Name",
        placeholder: "Eg. John",
        inputType: "text",
        value: 'first_name',
        error: '',
      },
      {
        label: "Last Name",
        placeholder: "Eg. Doe",
        inputType: "text",
        value: 'last_name',
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
        label: "Mobile",
        placeholder: "Eg. 7718964516",
        inputType: "number",
        value: 'phone',
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
        label: "Email",
        placeholder: "eg. abc@abc.com",
        inputType: "email",
        value: 'email',
        error: '',
      },
      {
        label: "Address",
        placeholder: "Type your complete address here...",
        inputType: "text",
        value: 'address',
        error: '',
      },
      {
        label: "State",
        placeholder: "Eg. Maharashtra",
        inputType: "text",
        value: 'state',
        error: '',
      },
      {
        label: "City",
        placeholder: "Eg. Mumbai",
        inputType: "text",
        value: 'city',
        error: '',
      },
      {
        label: "Zip code",
        placeholder: "400022",
        inputType: "number",
        value: 'pincode',
        error: '',
      },
    ],
  };
  
  constructor(private fb: FormBuilder, private authServ: AuthHttpClientService) { }

  ngOnInit(): void {
    
    this.personalDetails=this.fb.group({
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      age:['', Validators.required],
      phone:['', Validators.required],
      gender:['', Validators.required],
      email:['', Validators.required],
      address:['', Validators.required],
      state:['', Validators.required],
      city:['', Validators.required],
      pincode:['', Validators.required],
    });

    this.getUserDetails();
  }

  fetchedPersonalData= new UserDetails("", "", 0, "", "", 0, "", "", "", "", "", "", 0);

  getUserDetails = () => {
    const id = 101;
    this.authServ.getUserDetails(id).subscribe(response=> {
      console.log(response);
      this.fetchedPersonalData = response;
      
      this.personalDetails=this.fb.group({
        first_name: [this.fetchedPersonalData.first_name, Validators.required],
        last_name: [this.fetchedPersonalData.last_name, Validators.required],
        phone: [this.fetchedPersonalData.phone, Validators.required],
        email: [this.fetchedPersonalData.email, Validators.required],
        age: [this.fetchedPersonalData.age, Validators.required],
        gender: [this.fetchedPersonalData.gender, Validators.required],
        address: [this.fetchedPersonalData.address, Validators.required],
        state: [this.fetchedPersonalData.state, Validators.required],
        city: [this.fetchedPersonalData.city, Validators.required],
        pincode: [this.fetchedPersonalData.pincode, Validators.required],
      });

      console.log(this.fetchedPersonalData, this.personalDetails);
    })
  }

}
