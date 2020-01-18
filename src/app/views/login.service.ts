import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = '/api/ejemplo/login';

  constructor(public http: HttpClient) {
  }

  public getToken(data: object): Observable<any> {
    const params: FormData = new FormData();

    params.append('usuario', data['usuario'].toString());
    params.append('password', data['password'].toString());

    return this.http.post(this.url, params);
  }

  public setSession(data: string) {
    localStorage.setItem('token', data);
  }

  public getSession() {
    return localStorage.getItem('token');
  }
}
