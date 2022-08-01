import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from 'app/pages/admin-dashboard/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationHttpClientService {

  baseUrl:string="http://localhost:8090/application-api/"


  constructor(private httSer:HttpClient) { }

  public getApplicationList(){
    return this.httSer.get<Application[]>(this.baseUrl+"get-application-list")
  }
  public getApplicationListByStatus(status:String){
    return this.httSer.get<Application[]>(this.baseUrl+"get-application-by-status/"+status);
  }
  public getApplicationByUserId(){
    let userDetails = JSON.parse(localStorage.getItem("user_data")|| "");
    return this.httSer.get<Application[]>(this.baseUrl+"get-application-by-user_id/" + userDetails.user_id);
  }
  public getApplicationByUserId1(application_id:Number){
    return this.httSer.get<Application[]>(this.baseUrl+"get-application-by-user_id/"+application_id);
  }
  public updateApplication(application_id:Number,application_status:string){
    return this.httSer.put(this.baseUrl+"update-application-status/"+application_id+"/"+application_status,{});
  }
  public addApplication(applicationData:any){
    console.log(applicationData)
    return this.httSer.post(this.baseUrl+"add-application/",applicationData);
  }
  
}
