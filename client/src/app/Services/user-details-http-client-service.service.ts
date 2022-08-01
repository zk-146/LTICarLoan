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
    let user = JSON.parse(localStorage.getItem("user_data")|| "")
    return this.userHttpSer.get<UserDetails[]>("http://localhost:8090/user-api/get-user-details?id=" + user.user_id);
  }

}
