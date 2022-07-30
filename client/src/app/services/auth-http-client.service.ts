import { UserDetails } from './../components/User';
import { EligibilityForm } from './../pages/eligibility-form/EligibilityForm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthHttpClientService {
  baseUrl:string="http://localhost:8090/user-api";
  constructor(private httpSer: HttpClient) { }
  public getUserDetails(user_id:number)
  {
    return this.httpSer.get<UserDetails>(this.baseUrl+'/get-user-details?id='+user_id);
  }
  public addEligibilityForm(usr:UserDetails){
    return this.httpSer.post<any>(this.baseUrl+'/addemp',usr);
  }
}
