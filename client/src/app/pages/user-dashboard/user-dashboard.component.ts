import { UserDetailsHttpClientServiceService } from './../../services/user-details-http-client-service.service';
import { ApplicationHttpClientService } from './../../services/application-http-client.service';
import { Component, OnInit } from '@angular/core';
import { Application } from '../admin-dashboard/Application';
import { UserDetails } from './UserDetails';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userData:any = JSON.parse(localStorage.getItem("user_data")|| "");

  applicationList:Application[]=[];
  constructor(private applSer:ApplicationHttpClientService, private userDetSer:UserDetailsHttpClientServiceService) { }

  ngOnInit(): void {
    this.getApplicationByUserId();
    this.getUserDetailsById();
  }

  getApplicationByUserId(){
    this.applSer.getApplicationByUserId().subscribe(
      response=>{
        this.applicationList=response;

        console.log(response);
      }
    )
  }

  getUserDetailsById(){
    this.userDetSer.getUserById().subscribe(
      response=>{
        this.userData=response;

        console.log(response,this.userData);
      }
    )
  }

}
