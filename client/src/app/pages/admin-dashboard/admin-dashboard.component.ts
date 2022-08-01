import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationHttpClientService } from 'app/Services/application-http-client.service';
import { Application } from './Application';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  applicationList:Application[]=[];
  
  applicationData:any = JSON.parse(localStorage.getItem("application_data") || "{}");
  constructor(private applSer:ApplicationHttpClientService,private router:Router) { }

toggle = "pending";

onClickToggle(clickedBtn:string){

  
  this.toggle=clickedBtn;
  this.getApplicaionListByStatus(this.toggle);
}

statusToggle = "pending";

  onClickStatusToggle(clickedBtn:string,i:number){
    
    this.statusToggle=clickedBtn;
    console.log(this.statusToggle);
    this.updateApplication(i);
    
  }


  ngOnInit(): void {
    // this.getApplicationList();

    // localStorage.removeItem("a.application_id");
    // localStorage.setItem("a.application_id",JSON.stringify(a.application_id));
    // localStorage.removeItem("application_data");
    // let applicationData = {};
    // this.applSer.getApplicationByUserId1(a.user.user_id).subscribe(response=> {
    //   // applicationData = response[0];
    //   localStorage.setItem("application_data", JSON.stringify(response[0]));
    //   console.log(response[0]);
    // })



    this.getApplicaionListByStatus(this.toggle);
    if(localStorage.getItem("a.application_id")!=null){
      let application_id = localStorage.getItem("a.application_id");
      console.log(application_id);
      if(!application_id){
        alert("Invalid action")
        this.router.navigate(['admin-dashboard']);
        return;
      }
      console.log(this.applicationData);
      this.applSer.updateApplication(parseInt(application_id),this.statusToggle).subscribe(
        
        response=>{
          console.log(this.toggle);
          console.log(response);
          // this.applicationData=response;
        }
      );
  }
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
    //this.router.navigate(['application-status-update'])  
    
  }

  updateApplication(i:number){
    console.log(this.applicationList[i]);

      let application_id = this.applicationList[i].application_id;
      console.log(application_id);
      if(!application_id){
        alert("Invalid action")
        this.router.navigate(['admin-dashboard']);
        return;
      }
      console.log(this.applicationData);
      this.applSer.updateApplication((application_id),this.statusToggle).subscribe(
        
        response=>{
          console.log(this.toggle);
          console.log(response);
          this.applicationData=response;
        }
      );
  }
}
