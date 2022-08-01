import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanOfferHttpClientService {
  baseUrl:string="http://localhost:8090/loan-api";

  constructor(private httpSer: HttpClient) { }

  public getLoanOffer() {
    const user = JSON.parse(localStorage.getItem("user_data") || "");
    console.log(user);
    return this.httpSer.get<any>(this.baseUrl+'/find-loan-by-user_id/' + user.user_id);
  }
}
