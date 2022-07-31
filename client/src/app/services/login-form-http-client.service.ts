import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginFormHttpClientService {
  baseUrl="http://localhost:8090/user-api";

  constructor(private http: HttpClient) { }

  
  public userLogin(email:string,password:string, loginAsAdmin:boolean ){
    let loginPath = '/login'
    if(loginAsAdmin) loginPath = '/admin-login'
    return this.http.post<any>(this.baseUrl+ loginPath +`?email=${email}&password=${password}`,{});
  }
}
