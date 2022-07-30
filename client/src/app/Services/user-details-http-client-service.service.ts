import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from 'app/pages/user-dashboard/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsHttpClientServiceService {

  baseUrl:string="http://localhost:8090/user-api/"

  constructor(private userHttpSer:HttpClient) { }

  public getUserById(){
    return this.userHttpSer.get<UserDetails[]>(this.baseUrl+"get-application-list/"+"112")
  }

}
