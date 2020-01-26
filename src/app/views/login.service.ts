import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestModel, UsuarioModel, UtilsFunctions} from '../utils';
import {map, tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private url: string = environment.apiUrl;
    private request: RequestModel<UsuarioModel> = new RequestModel<UsuarioModel>(new UsuarioModel());

    private jtwService = new JwtHelperService()

    constructor(public http: HttpClient) {
    }

    public getToken(credenciales: UsuarioModel): Observable<RequestModel<UsuarioModel>> {
        this.request.setData(credenciales);
        return this.http.post<RequestModel<UsuarioModel>>(this.url+'/api/login/get_token', this.request).pipe(
            map((rs: RequestModel<UsuarioModel>) => {
                // let rs1: RequestModel<UsuarioModel> = new RequestModel<UsuarioModel>()
                // rs1 = Object.assign(new RequestModel<UsuarioModel>(),rs)
                // rs1.setData(Object.assign(new UsuarioModel(),rs["data"]))
                //return rs1

                return UtilsFunctions.mapRequest<UsuarioModel>(UsuarioModel, rs);

            })
        );
    }

    public setSession(token: string) {
        localStorage.setItem('token', token);
    }

    public getSession(): string {
        try {
            return localStorage.getItem('token');
        } catch (e) {
            return '';
        }
    }

    public clearSession() {
        localStorage.removeItem('token');
    }

    public hasSession(): boolean {
        try {
           return localStorage.getItem('token').length > 0
        } catch (e) {
            return false;
        }
    }

    public getUserSession(): UsuarioModel {
        try {
            return Object.assign(new UsuarioModel(), this.jtwService.decodeToken(this.getSession())["user"])
        } catch (e) {
            return null
        }
    }
}
