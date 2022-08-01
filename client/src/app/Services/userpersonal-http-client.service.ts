import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserpersonalHttpClientService {
  baseUrl:string="http://localhost:8090/user-api";


  constructor(private httpSer: HttpClient) { }


  public addUserPersonal(userpersonal:any){
    console.log("userpersonal IS BEING ADDED", userpersonal);
    return this.httpSer.post<any>(this.baseUrl+'/addUser',userpersonal);
  }


}
