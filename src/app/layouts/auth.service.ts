import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost/backend/public/index.php?/api/login/authenticate";

  constructor(private http: HttpClient, private route: Router) {

    
   }

  public getSessionToken(usuario: string, clave: string):Observable<any> {
    //return this.http.post(this.url, {user: {usuario:usuario,clave:clave}})
    return this.http.get("http://localhost/backend/public/index.php?/welcome/get_users")
    .pipe(map((data:any[]) => data.find(item=> item["clave"] === clave && item["usuario"]===usuario)))
  }

  public setTokenInStore(token: string) {
    localStorage.setItem("token",token)
  }

  public getTokenInStore() {
    return localStorage.getItem("token")

    // token esta en base64 para decode usar atob
    // para convertir a objecto JSON.parse
  }

  public logout() {
    localStorage.removeItem("token")
    this.route.navigate(["/auth"])
  }
}
