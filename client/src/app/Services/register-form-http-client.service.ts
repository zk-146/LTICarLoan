import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from 'app/pages/register/Register';


@Injectable({
  providedIn: 'root'
})
export class RegisterFormHttpClientService {

  baseUrl="http://localhost:8090/user-api";
  constructor(private http: HttpClient) { }

  public addUser(r: Register){
    return this.http.post<any>(this.baseUrl+'/addUser', r);
  }



}
