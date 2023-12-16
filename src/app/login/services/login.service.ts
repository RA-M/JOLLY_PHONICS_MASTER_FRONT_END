import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/app/core/models/login/login.request';

@Injectable({
    providedIn: 'root'
  })
export class LoginService {
    private baseUrl = 'http://localhost:9192';

    constructor(private http: HttpClient) { }

    createUser(user: LoginRequest): Observable<LoginRequest> {
        return this.http.post<LoginRequest>(`${this.baseUrl}/login`, user);
    }
}