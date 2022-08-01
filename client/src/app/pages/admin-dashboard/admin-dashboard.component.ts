import { ApplicationHttpClientService } from './../../services/application-http-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from './Application';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  applicationList:Application[]=[];

  constructor(private applSer:ApplicationHttpClientService,private router:Router) { }

toggle = "pending";

onClickToggle(clickedBtn:string){

  
  this.toggle=clickedBtn;
  this.getApplicaionListByStatus(this.toggle);
}


  ngOnInit(): void {
    // this.getApplicationList();
    this.getApplicaionListByStatus(this.toggle);
  }

  // getApplicationList(){
  //   this.applSer.getApplicationList().subscribe(
  //     response=>{
  //       this.applicationList=response;

  //       console.log(response);
  //     }
  //   )
  // }

  getApplicaionListByStatus(toggle:String){
    this.applSer.getApplicationListByStatus(toggle).subscribe(
      response=>{
        this.applicationList=response;
      }
    )
  }

  updateStatus(a:Application):void{
    localStorage.removeItem("a.application_id");
    localStorage.setItem("a.application_id",JSON.stringify(a.application_id));
    localStorage.removeItem("application_data");
    let applicationData = {};
    this.applSer.getApplicationByUserId1(a.user.user_id).subscribe(response=> {
      // applicationData = response[0];
      localStorage.setItem("application_data", JSON.stringify(response[0]));
      console.log(response[0]);
    })
    this.router.navigate(['application-status-update'])  
  }
}
