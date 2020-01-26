export class ClienteModel {
    public id: number;
    public nombre: string;
    public telefono: string;
    public activo: boolean;


    constructor(id: number=0, nombre: string='', telefono: string='', activo: boolean=true) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.activo = activo;
    }

    getTd(): number {
        return this.id;
    }

    setTd(value: number) {
        this.id = value;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(value: string) {
        this.nombre = value;
    }

    getTelefono(): string {
        return this.telefono;
    }

    setTelefono(value: string) {
        this.telefono = value;
    }

    getActivo(): boolean {
        return this.activo;
    }

    setActivo(value: boolean) {
        this.activo = value;
    }
}
