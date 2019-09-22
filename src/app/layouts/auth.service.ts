import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "/api/backend/public/login/authenticate";

  constructor(private http: HttpClient, private route: Router) {

    
   }

  // public getSessionToken(usuario: string, clave: string):Observable<any> {
  //   //return this.http.post(this.url, {user: {usuario:usuario,clave:clave}})
  //   return this.http.get("/api/backend/public/index.php?/welcome/get_users")
  //   .pipe(map((data:any[]) => data.find(item=> item["clave"] === clave && item["usuario"]===usuario)))
  // }

  public getSessionToken(usuario: string, clave: string):Observable<any> {
      //return this.http.post(this.url, {user: {usuario:usuario,clave:clave}})
      let params: FormData = new FormData()

      params.append("usuario", usuario);
      params.append("password", clave);
      
      return this.http.post(this.url,params)
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

  public isLoggin(): boolean {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }
}
