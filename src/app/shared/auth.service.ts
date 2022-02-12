import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  getUserByPassword(user:Customers):Observable<any>{
    console.log(user.Name);
    console.log(user.Pass);
    return this.httpClient.get(environment.apiUrl+"/api/customers/login/"+user.Name+"&"+user.Pass);
  }

  public loginVerify(user:Customers){
    console.log(user);
    return this.httpClient.get(environment.apiUrl+"/api/customers/login/"+user.Name+"&"+user.Pass);
  }

  //logout
  public logout(){
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACESSROLE");
    sessionStorage.removeItem("USERNAME");
    sessionStorage.removeItem("jwtToken");
  }
  
}
