import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public orgId: String = 'ANGULAR_LahiruAbegunawardena';
  getData(){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get("http://ec2-13-233-153-194.ap-south-1.compute.amazonaws.com:17114/api/org/vehicle/byorg/"+this.orgId + "/", {Headers: headers});
  }

  setData(vehicleDta){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post("http://ec2-13-233-153-194.ap-south-1.compute.amazonaws.com:17114/api/org/vehicle/", vehicleDta, {Headers: headers});
}
}
