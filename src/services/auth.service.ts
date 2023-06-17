import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth } from 'src/interfaceAuth';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signUp(user:IAuth):Observable<IAuth>{
    return this.http.post<IAuth>(`http://localhost:3000/signup`,user)
  }
  signIn(user:IAuth):Observable<IAuth>{
    return this.http.post<IAuth>(`http://localhost:3000/signin`,user)
  }
}
