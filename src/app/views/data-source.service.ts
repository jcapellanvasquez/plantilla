import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ClienteModel} from '../utils/cliente-model';
import {HttpClient} from '@angular/common/http';
import {InteraccionModel, RequestModel, UsuarioModel, UtilsFunctions} from '../utils';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataSourceService {
    public clientes$: BehaviorSubject<ClienteModel[]> = new BehaviorSubject<ClienteModel[]>([]);
    public usuario$: BehaviorSubject<UsuarioModel[]> = new BehaviorSubject<UsuarioModel[]>([]);
    public interacciones$: BehaviorSubject<InteraccionModel[]> = new BehaviorSubject<InteraccionModel[]>([]);

    constructor(private http: HttpClient) {
    }
    
    public getClientes() {
        this.http
            .get<RequestModel<ClienteModel[]>>('/api/clientes')
            .subscribe( data => this.clientes$.next(data.data))
    }


    public setCliente(data: ClienteModel): Observable<RequestModel<ClienteModel>> {
        let request: RequestModel<ClienteModel> = new RequestModel<ClienteModel>()
        request.setData(data)
        return this.http.post<RequestModel<ClienteModel>>('/api/cliente',request)
    }


    public updateCliente(data: ClienteModel): Observable<RequestModel<ClienteModel>> {
        let request: RequestModel<ClienteModel> = new RequestModel<ClienteModel>()
        request.setData(data)
        return this.http.put<RequestModel<ClienteModel>>('/api/cliente',request)
    }

    public getUsuarios() {
        this.http
            .get<RequestModel<UsuarioModel[]>>('/api/usuarios')
            .subscribe( data => this.usuario$.next(data.data))
    }


    public setUsuario(data: UsuarioModel): Observable<RequestModel<UsuarioModel>> {
        let request: RequestModel<UsuarioModel> = new RequestModel<UsuarioModel>()
        request.setData(data)
        return this.http.post<RequestModel<UsuarioModel>>('/api/usuario',request)
    }


    public updateUsuario(data: UsuarioModel): Observable<RequestModel<UsuarioModel>> {
        let request: RequestModel<UsuarioModel> = new RequestModel<UsuarioModel>()
        request.setData(data)
        return this.http.put<RequestModel<UsuarioModel>>('/api/usuario',request)
    }

    public getInteracciones() {
        this.http
            .get<RequestModel<InteraccionModel[]>>('/api/interacciones')
            .subscribe( data => this.interacciones$.next(data.data))
    }


    public setInteraccion(data: InteraccionModel): Observable<RequestModel<InteraccionModel>> {
        let request: RequestModel<InteraccionModel> = new RequestModel<InteraccionModel>()
        request.setData(data)
        return this.http.post<RequestModel<InteraccionModel>>('/api/interaccion',request)
    }


    public updateInteraccion(data: InteraccionModel): Observable<RequestModel<InteraccionModel>> {
        let request: RequestModel<InteraccionModel> = new RequestModel<InteraccionModel>()
        request.setData(data)
        return this.http.put<RequestModel<InteraccionModel>>('/api/interaccion',request)
    }


}
