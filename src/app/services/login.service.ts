import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../core/models/login/login.request';
import { Observable, map } from 'rxjs';
import { RegisterRequest } from '../core/models/login/register.request';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'})
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9192"

  constructor(private http:HttpClient) { }

  //calling the server to generate token

  generateToken(credentials:any)
  {
    return this.http.post(`${this.url}/token`,credentials)
  }

  // login(username :string, password :string): Observable<any> {
  //   return this.http.post<any>(`${this.url}/authenticate`, {
  //     username:username,
  //     password:btoa(password)
  //   }, httpOptions).pipe(map(userData => {
  //     console.log("Authentication worked for username :"+username);
  //     alert("Authentication worked");

  //   }));
  // }

  login(user: LoginRequest): Observable<LoginRequest> {
    return this.http.post<LoginRequest>(`${this.url}/authenticate`, user);
  }

  register(user: RegisterRequest): Observable<RegisterRequest> {
    return this.http.post<RegisterRequest>(`${this.url}/registerUser`, user);
  }

  //for login user

  loginUser(token: string)
  {
    localStorage.setItem("token", token)
    return true;

  }

  //to check that if the user log in or not
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token==null)
    {
      return false;
    }else{
      return true;
    }
  }

  //for logout user
  logout()
  {
    localStorage.removeItem('token');
    return true;
  }

  //to getting the token
  getToken()
  {
    return localStorage.getItem("token");
  }
}
