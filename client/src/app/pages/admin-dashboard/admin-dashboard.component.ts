import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

toggle = "pending";

onClickToggle(clickedBtn:string){

  this.toggle=clickedBtn;
}


// status = 'Enable'; 

// enableDisableRule() {
//     this.toggle = !this.toggle;
//     this.status = this.toggle ? 'Enable' : 'Disable';
// }

// approve_toggle = true;
// approve_status = 'Enable'; 

// enableDisableApproveRule() {
//     this.approve_toggle = !this.approve_toggle;
//     this.approve_status = this.approve_toggle ? 'Enable' : 'Disable';
// }



  ngOnInit(): void {
  }

}
