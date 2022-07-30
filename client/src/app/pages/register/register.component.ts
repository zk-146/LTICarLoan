import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userPersonalDetails!:FormGroup;

  currentFormIndex = 0;

  constructor(private fb: FormBuilder) { }

  increaseCurrentIndex = () => {
    let proceed = true;
    if(proceed)
      this.currentFormIndex++;

  }

  decreaseCurrentIndex = () => {
    this.currentFormIndex--;
  }
  
  ngOnInit(): void {
  }
}
