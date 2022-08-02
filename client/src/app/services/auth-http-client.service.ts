import { UserDetails } from './../components/User';
import { EligibilityForm } from './../pages/eligibility-form/EligibilityForm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthHttpClientService {
  baseUrl:string="http://localhost:8090/user-api";
  constructor(private httpServ: HttpClient) { }
  public getUserDetails()
  {
    let user = JSON.parse(localStorage.getItem("user_data")|| "")
    return this.httpServ.get<UserDetails>(this.baseUrl+'/get-user-details?id='+user.user_id);
  }
  
  public userLogin(email:string,password:string, loginAsAdmin:boolean ){
    let loginPath = '/login'
    if(loginAsAdmin) loginPath = '/admin-login'
    return this.httpServ.post<any>(this.baseUrl+ loginPath +`?email=${email}&password=${password}`,{});
  }
  
  
  public addUserData(userData:any){
    console.log("userpersonal IS BEING ADDED");
    return this.httpServ.post<any>(this.baseUrl+'/addUser',userData);
  }
}
