import {ClienteModel} from './cliente-model';
import {UsuarioModel} from './usuario-model';

export class InteraccionModel {

    public id: number;
    public memo: string;
    public fecha: number;
    public clienteId: number;
    public usuarioId: number;
    public activo: boolean;
    public cliente: ClienteModel;
    public usuario: UsuarioModel;


    constructor(id: number, memo: string, fecha: number, clienteId: number, usuarioId: number, activo: boolean, cliente: ClienteModel, usuario: UsuarioModel) {
        this.id = id;
        this.memo = memo;
        this.fecha = fecha;
        this.clienteId = clienteId;
        this.usuarioId = usuarioId;
        this.activo = activo;
        this.cliente = cliente;
        this.usuario = usuario;
    }
}
