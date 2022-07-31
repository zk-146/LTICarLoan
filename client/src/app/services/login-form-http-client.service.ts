import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginFormHttpClientService {
  baseUrl="http://localhost:8090/user-api";

  constructor(private httpServ: HttpClient) { }

  
  // public userLogin(email:string,password:string ){
  //   return this.httpServ.post<boolean>(this.baseUrl+'/login' +"?email=Jay@gmail.com&password=Jay123",{});

  public userLogin(email:string,password:string, loginAsAdmin:boolean ){
    let loginPath = '/login'
    if(loginAsAdmin) loginPath = '/admin-login'
    return this.httpServ.post<any>(this.baseUrl+ loginPath +`?email=${email}&password=${password}`,{});
  }
}
