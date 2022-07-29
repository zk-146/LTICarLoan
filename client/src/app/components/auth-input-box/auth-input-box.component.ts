import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-input-box',
  templateUrl: './auth-input-box.component.html',
  styleUrls: ['./auth-input-box.component.css']
})
export class AuthInputBoxComponent implements OnInit {

  
  @Input() inputType="";
  @Input() placeholder="";

  constructor() { }

  ngOnInit(): void {
  }

}


