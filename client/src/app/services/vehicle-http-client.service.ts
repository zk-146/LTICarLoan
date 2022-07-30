import { HttpClient } from '@angular/common/http';
import { VehicleDetails } from './../components/vehicle-details-form/Vehicle';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VehicleHttpClientService {
  baseUrl:string="http://localhost:8090/vehicle-api";

  constructor(private httpSer: HttpClient) { }
  
  public addVehicle(vehicle:any){
    console.log("VEHICLE IS BEING ADDED", vehicle);
    return this.httpSer.post<any>(this.baseUrl+'/add-vehicle',vehicle);
  }
  
  public getVehicle(user_id:number){
    console.log("VEHICLE IS BEING FETCHED", user_id);
    return this.httpSer.get<any>(this.baseUrl+'/get-vehicle/'+user_id);
  }
}
