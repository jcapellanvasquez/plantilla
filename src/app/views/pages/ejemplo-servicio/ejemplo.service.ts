import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor(public http: HttpClient) {
  }

  public getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
