import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ClienteModel} from '../utils/cliente-model';
import {HttpClient} from '@angular/common/http';
import {InteraccionModel, RequestModel, UsuarioModel, UtilsFunctions} from '../utils';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataSourceService {
    public clientes$: BehaviorSubject<ClienteModel[]> = new BehaviorSubject<ClienteModel[]>([]);
    public usuario$: BehaviorSubject<UsuarioModel[]> = new BehaviorSubject<UsuarioModel[]>([]);
    public interacciones$: BehaviorSubject<InteraccionModel[]> = new BehaviorSubject<InteraccionModel[]>([]);
    private url: string = environment.apiUrl;

    constructor(private http: HttpClient) {
    }
    
    public getClientes() {
        this.http
            .get<RequestModel<ClienteModel[]>>(this.url+this.url+'/api/clientes')
            .subscribe( data => this.clientes$.next(data.data))
    }


    public setCliente(data: ClienteModel): Observable<RequestModel<ClienteModel>> {
        let request: RequestModel<ClienteModel> = new RequestModel<ClienteModel>()
        request.setData(data)
        return this.http.post<RequestModel<ClienteModel>>(this.url+'/api/cliente',request)
    }


    public updateCliente(data: ClienteModel): Observable<RequestModel<ClienteModel>> {
        let request: RequestModel<ClienteModel> = new RequestModel<ClienteModel>()
        request.setData(data)
        return this.http.put<RequestModel<ClienteModel>>(this.url+'/api/cliente',request)
    }

    public getUsuarios() {
        this.http
            .get<RequestModel<UsuarioModel[]>>(this.url+'/api/usuarios')
            .subscribe( data => this.usuario$.next(data.data))
    }


    public setUsuario(data: UsuarioModel): Observable<RequestModel<UsuarioModel>> {
        let request: RequestModel<UsuarioModel> = new RequestModel<UsuarioModel>()
        request.setData(data)
        return this.http.post<RequestModel<UsuarioModel>>(this.url+'/api/usuario',request)
    }


    public updateUsuario(data: UsuarioModel): Observable<RequestModel<UsuarioModel>> {
        let request: RequestModel<UsuarioModel> = new RequestModel<UsuarioModel>()
        request.setData(data)
        return this.http.put<RequestModel<UsuarioModel>>(this.url+'/api/usuario',request)
    }

    public getInteracciones() {
        this.http
            .get<RequestModel<InteraccionModel[]>>(this.url+'/api/interacciones')
            .subscribe( data => this.interacciones$.next(data.data))
    }


    public setInteraccion(data: InteraccionModel): Observable<RequestModel<InteraccionModel>> {
        let request: RequestModel<InteraccionModel> = new RequestModel<InteraccionModel>()
        request.setData(data)
        return this.http.post<RequestModel<InteraccionModel>>(this.url+'/api/interaccion',request)
    }


    public updateInteraccion(data: InteraccionModel): Observable<RequestModel<InteraccionModel>> {
        let request: RequestModel<InteraccionModel> = new RequestModel<InteraccionModel>()
        request.setData(data)
        return this.http.put<RequestModel<InteraccionModel>>(this.url+'/api/interaccion',request)
    }


}
