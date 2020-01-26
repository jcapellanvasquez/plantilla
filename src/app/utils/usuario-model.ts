export class UsuarioModel {

    public id: number;
    public nombre: string;
    public apellido: string;
    public username: string;
    public password: string;
    public token: string;


    constructor(id: number = 0, nombre: string = '', apellido: string = '', username: string = '', password: string = '', token: string = '') {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
        this.token = token;
    }

    public getId(): number {
        return this.id;
    }

    public setId(value: number) {
        this.id = value;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(value: string) {
        this.nombre = value;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(value: string) {
        this.apellido = value;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(value: string) {
        this.username = value;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(value: string) {
        this.password = value;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(value: string) {
        this.token = value;
    }
}
