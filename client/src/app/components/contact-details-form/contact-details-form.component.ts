import { UserDetails } from '../User';
import { AuthHttpClientService } from './../../services/auth-http-client.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ContactDetails } from './ContactDetails';

@Component({
  selector: 'app-contact-details-form',
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.css']
})
export class ContactDetailsFormComponent implements OnInit {
  contactDetails!:FormGroup;
  @Input() currentFormIndex = 2;

  contactDetailsObject =  {
    name: "Contact Details",
    fields: [
      {
        label: "Phone Number",
        placeholder: "Eg. 7718964516",
        inputType: "number",
        value: 'phone',
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
  };

  fetchedContactData = new UserDetails("", "", 0, "", "", 0, "", "", "", "", "", "", 0);
  constructor(private fb: FormBuilder, private authServ: AuthHttpClientService) { }

  ngOnInit(): void {
    this.contactDetails=this.fb.group({
      phone:['', Validators.required],
      email:['', [Validators.required, Validators.email]]
    });
    this.getUserDetails();
  }

  getUserDetails = () => {
    let user = JSON.parse(localStorage.getItem("user_data")|| "");
    this.authServ.getUserDetails().subscribe(response=> {
      console.log(response);
      this.fetchedContactData = response;

      console.log(this.fetchedContactData.email, "this.fetchedContactData.phone", this.fetchedContactData.phone)
    console.log("this.fetchedContactData",this.fetchedContactData);
      
      this.contactDetails=this.fb.group({
        phone:[this.fetchedContactData.phone, Validators.required],
        email:[this.fetchedContactData.email, [Validators.required, Validators.email]]
      });

      console.log(this.fetchedContactData, this.contactDetails);
    })
  }

  
  onInputChange = () => {
    let contactData = new ContactDetails("", "");
    console.log(contactData, this.contactDetails.get('company_name')?.value)
    contactData[`phone`] = this.contactDetails.get(`phone`)?.value;
    contactData[`email`] = this.contactDetails.get(`email`)?.value;
    localStorage.setItem("contactDetails", JSON.stringify(contactData));
  }

}
