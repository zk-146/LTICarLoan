import { EligibilityForm } from './../pages/eligibility-form/EligibilityForm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EligibilityFormHttpClientService {
  baseUrl:string="http://localhost:8090/eligibility-form-api";
  constructor(private httpSer: HttpClient) { }
  
  public addEligibilityForm(eligForm:EligibilityForm){
    return this.httpSer.post<any>(this.baseUrl+'/addeligForm', eligForm);
  }
}
