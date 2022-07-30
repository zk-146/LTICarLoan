import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: ['./user-personal-details.component.css']
})
export class UserPersonalDetailsComponent implements OnInit {

  userDetailsForm !: FormGroup;

  userDet:any;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.userDetailsForm=this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      emailid:['', Validators.required],
      password:['', Validators.required],
      age:['', Validators.required],
      gender:['', Validators.required],
    });
  }

}
