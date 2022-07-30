import { Component, OnInit } from '@angular/core';
import { ApplicationHttpClientService } from 'app/Services/application-http-client.service';
import { UserDetailsHttpClientServiceService } from 'app/Services/user-details-http-client-service.service';
import { Application } from '../admin-dashboard/Application';
import { UserDetails } from './UserDetails';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userData:UserDetails[]=[];

  applicationList:Application[]=[];
  constructor(private applSer:ApplicationHttpClientService, private userDetSer:UserDetailsHttpClientServiceService) { }

  ngOnInit(): void {
    this.getApplicationByUserId();
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

        console.log(response);
      }
    )
  }

}
