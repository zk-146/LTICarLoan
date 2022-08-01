import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressdetailsHttpClientService {

  baseUrl:string="http://localhost:8090/address-api";

  constructor(private httpSer: HttpClient) { }

  public addAddress(address:any){
    console.log("address IS BEING ADDED", address);
    return this.httpSer.post<any>(this.baseUrl+'/add-address',address);
  }
}
