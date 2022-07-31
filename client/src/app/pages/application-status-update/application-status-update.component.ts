import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationHttpClientService } from 'app/Services/application-http-client.service';

@Component({
  selector: 'app-application-status-update',
  templateUrl: './application-status-update.component.html',
  styleUrls: ['./application-status-update.component.css']
})
export class ApplicationStatusUpdateComponent implements OnInit {


  applicationData:any;

  constructor(private appliSer:ApplicationHttpClientService,private router:Router) { }

  toggle = "pending";

onClickToggle(clickedBtn:string){
  
  this.toggle=clickedBtn;
  
}

  ngOnInit(): void {
    if(localStorage.getItem("a.application_id")!=null){
      let application_id = localStorage.getItem("a.application_id");
      console.log(application_id);
      if(!application_id){
        alert("Invalid action")
        this.router.navigate(['admin-dashboard']);
        return;
      }
      console.log(this.applicationData);
      this.appliSer.updateApplication(parseInt(application_id),this.toggle).subscribe(
        response=>{
          console.log(response);
          this.applicationData=response;
        }
      );
  }
}

  ngOnSubmit(): void{
    this.appliSer.getApplicationByUserId1(this.applicationData.application_id)

        .subscribe(response => {
          console.log(this.applicationData.application_id);
          this.router.navigate(['application-status-update'])
          alert("Record updated successfully");
        }, error => {
          alert(error);
        });
  }
}
