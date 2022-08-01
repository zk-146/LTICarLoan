import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.css']
})
export class EmiCalcComponent implements OnInit {
  loanAmount: number = 200000;
  tenure: number = 10;
  interest: number = 5;
  TotalAmount: number=0;
  emi: number = 0;
  cal() {
    var Amount =(Number(this.loanAmount)*(this.interest/(100*12))*(((Math.pow(1+(this.interest/(100*12)),this.tenure))/ ((Math.pow(1+(this.interest/(100*12)),this.tenure))-1))));
    this.emi = Math.ceil(Amount);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
