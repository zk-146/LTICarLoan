import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmploymentdetailsHttpClientService {
  baseUrl:string="http://localhost:8090/employment-api";

  constructor(private httpSer: HttpClient) { }
  
  public addemployment(employment:any){
    console.log("employment IS BEING ADDED", employment);
    return this.httpSer.post<any>(this.baseUrl+'/add-employment',employment);
  }
}
