import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserpersonalHttpClientService {
  baseUrl:string="http://localhost:8090/user-api";


  constructor(private httpSer: HttpClient) { }


  public addUserData(userData:any){
    console.log("userpersonal IS BEING ADDED");
    return this.httpSer.post<any>(this.baseUrl+'/addUser',userData);
  }


}
