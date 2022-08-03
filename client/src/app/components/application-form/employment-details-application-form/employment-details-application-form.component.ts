import { AuthHttpClientService } from './../../../services/auth-http-client.service';
import { EmploymentDetails } from 'app/components/employment-details/EmploymentDetails';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-details-application-form',
  templateUrl: './employment-details-application-form.component.html',
  styleUrls: ['./employment-details-application-form.component.css']
})

export class EmploymentDetailsApplicationFormComponent implements OnInit {
  employmentDetails!:FormGroup;
  @Input() currentFormIndex = 1;

  employmentDetailsObject = {
    name: "Employment Details",
    fields: [
      {
        label: "Type Of Employment",
        placeholder: "",
        inputType: "text",
        value: 'type_of_employment',
        error: '',
      },
      {
        label: "Annual Salary",
        placeholder: "",
        inputType: "text",
        value: 'annual_salary',
        error: '',
      },
    ],
  };
  
  constructor(private fb: FormBuilder, private userServ: AuthHttpClientService) { }

  employmentData = new EmploymentDetails("", 0);

  ngOnInit(): void {
    this.employmentDetails=this.fb.group({
      type_of_employment:['', Validators.required],
      annual_salary:['', Validators.required],
      existing_EMI:['', Validators.required],
    });

    this.userServ.getUserDetails().subscribe(response=> {
      this.employmentDetails=this.fb.group({
        type_of_employment:[response.type_of_employment, Validators.required],
        annual_salary:[response.annual_salary, Validators.required],
        existing_EMI:['', Validators.required],
      });
    });
    
  }




}
