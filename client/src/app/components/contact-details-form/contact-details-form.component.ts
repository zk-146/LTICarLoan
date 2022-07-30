import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

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
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.contactDetails=this.fb.group({
      phoneNumber:['', Validators.required],
      email:['', Validators.required, Validators.email]
    });
    
  }

}
