import { Injectable } from '@angular/core';
import {HttpClient,} from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = '66daeaf5e54b0814c42c';
  private clientsecret ='f8154b0c2794c20e620314e5e259aa7aa146199d';
  constructor(private http:HttpClient) { 
    console.log("service is now ready");
    this.username ='lucky oula';
  }
   
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username +"?client_id=" + this.clientid + "&client_secret" + this.clientsecret)
    
    
  }

}