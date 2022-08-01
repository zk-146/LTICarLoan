import { EligibilityForm } from './../pages/eligibility-form/EligibilityForm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EligibilityFormHttpClientService {
  baseUrl:string="http://localhost:8090/eligibility-api";
  constructor(private httpSer: HttpClient) { }
  
  public addEligibilityForm() {
    const user_id = JSON.parse(localStorage.getItem("user_data") || "");
    console.log(user_id);
    return this.httpSer.post<any>(this.baseUrl+'/add-loan/' + 116, {});
  }
}
