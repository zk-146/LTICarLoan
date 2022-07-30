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
}