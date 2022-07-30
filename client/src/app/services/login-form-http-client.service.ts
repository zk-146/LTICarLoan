import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginFormHttpClientService {
  baseUrl="http://localhost:8090/user-api";

  constructor(private http: HttpClient) { }

  
  public userLogin(email:string,password:string ){
    return this.http.post<any>(this.baseUrl+'/login' +"?email=Jay@gmail.com&password=Jay123",{});
  }
}
