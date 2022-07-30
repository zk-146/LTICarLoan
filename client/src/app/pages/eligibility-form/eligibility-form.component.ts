import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-form',
  templateUrl: './eligibility-form.component.html',
  styleUrls: ['./eligibility-form.component.css']
})

export class EligibilityFormComponent implements OnInit {
  currentFormIndex = 0;

  constructor() { }

  // updateFormValue= (titleIndex:number, fieldIndex:number, value:any)=> {
    // this.formDetails[titleIndex].fields[fieldIndex].value = value;
    // console.log(this.vehicleDetails);
  // }

  // increaseCurrentIndex = (formDetails:any) => {
  increaseCurrentIndex = () => {
    let proceed = true;
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

  ngOnInit(): void {
  }
}
