import { Component, OnInit } from '@angular/core';
import { ApplicationHttpClientService } from 'app/Services/application-http-client.service';
import { Application } from './Application';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  applicationList:Application[]=[];

  constructor(private applSer:ApplicationHttpClientService) { }

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

}
