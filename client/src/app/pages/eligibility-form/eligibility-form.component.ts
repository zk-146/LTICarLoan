import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { VehicleDetails } from './../../components/vehicle-details-form/Vehicle';
import { VehicleHttpClientService } from './../../services/vehicle-http-client.service';
import { AuthHttpClientService } from './../../services/auth-http-client.service';
import { EligibilityFormHttpClientService } from './../../services/eligibility-form-http-client.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-eligibility-form',
  templateUrl: './eligibility-form.component.html',
  styleUrls: ['./eligibility-form.component.css']
})

export class EligibilityFormComponent implements OnInit {
  currentFormIndex:number = 0;
  formAlreadyFilled:boolean = false;
  formSuccess:boolean = false;
  formSubmitted: boolean = false;
  vehicleDetailsFilled: boolean = false;

  contactDetails!:FormGroup
  vehicleDetails!:FormGroup;
  personalDetails!:FormGroup;

  constructor(private fb: FormBuilder, private vehicleDetailServ: VehicleHttpClientService, private eligibilityForm: EligibilityFormHttpClientService) { }
  

  // increaseCurrentIndex = (formDetails:any) => {
  increaseCurrentIndex = () => {
    let proceed = false;
    // if(this.vehicleDetails.status==="INVALID") {
    //   proceed = false;
    // } else
    console.log(this.vehicleDetails);
    console.log(this.personalDetails);
    console.log(this.contactDetails);
    if(this.vehicleDetails.status==="VALID" && this.currentFormIndex===0) {
      proceed = true;
    } 
    // if(this.vehicleDetails.status==="INVALID") {
    //   proceed = false;
    // } else 
    // else if(this.vehicleDetails.status==="VALID" && this.currentFormIndex===1) {
    //   proceed = true;
    // } 

    if(this.currentFormIndex>0) proceed = true;
    
    else if(this.currentFormIndex===0) this.vehicleDetailsFilled=true;

    // for(let i = 0; i < formDetails!.length; i++) {
    //   if(formDetails![i].value=="") {
    //     formDetails![i].error= formDetails![i].label + " is required";
    //     proceed = false;
    //   }
    //   else {
    //     formDetails![i].error="";
    //   }
    // }
    if(proceed)
      this.currentFormIndex++;
  }

  decreaseCurrentIndex = () => {
    this.currentFormIndex--;
  }

  onSubmit() {
    this.addVehicle();
    setTimeout(()=> {
      this.addEligibiltyForm();
    }, 500)
    this.formSubmitted = true;
  }

  ngOnInit(): void {
    this.getVehicle();
    this.contactDetails=this.fb.group({
      phone:['', Validators.required],
      email:['', [Validators.required, Validators.email]]
    });
  
    this.vehicleDetails= this.fb.group({
      model_name:['', [Validators.required, Validators.minLength(2)]],
      company_name:['', [Validators.required, Validators.minLength(2)]],
      price:['', Validators.required],
    });
    
    this.personalDetails=this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      type_of_employment: ['', Validators.required],
      annual_salary: ['', Validators.required],
      exisiting_emi: ['', Validators.required],
    });
  }

  getVehicle(): void {
    let user = JSON.parse(localStorage.getItem("user_data")|| "");
    this.vehicleDetailServ.getVehicle(user.user_id).subscribe(response=> {
      console.log(response);
      if(response)
        this.formAlreadyFilled=true;
    })
  }

  addVehicle() {
    let vehicleData = localStorage.getItem("vehicleDetails");
    vehicleData = JSON.parse(vehicleData || "");
    this.vehicleDetailServ.addVehicle(vehicleData).subscribe(response=> {
      if(response)
        this.formSuccess=false;
    })
  }

  addEligibiltyForm() {
    this.eligibilityForm.addEligibilityForm().subscribe(response=> {
      console.log("RESPONSE" , response);
      if(response)
        this.formSuccess = true;
      else this.formSuccess = false;
    })
  }
}
