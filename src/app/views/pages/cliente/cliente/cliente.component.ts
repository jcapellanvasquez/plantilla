import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DataSourceService} from '../../../data-source.service';
import {DialogService} from 'primeng/dynamicdialog';
import {ClienteFormComponent} from '../cliente-form/cliente-form.component';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    providers: [DialogService]
})
export class ClienteComponent implements OnInit {

    public columnDefs = [
        {headerName: 'ID', field: 'id', resize: true, filter: 'agNumberColumnFilter', flex: true},
        {headerName: 'Nombre', field: 'nombre', resize: true, filter: 'agTextColumnFilter', flex: true},
        {headerName: 'Correo', field: 'email', resize: true, filter: 'agTextColumnFilter', flex: true},
        {headerName: 'Telefono', field: 'telefono', resize: true, filter: 'agTextColumnFilter', flex: true},
        {headerName: 'Activo', field: 'activo', resize: true, flex: true},

    ];


    constructor(public dataSource: DataSourceService, public dialogService: DialogService) {
    }

    ngOnInit() {
        this.dataSource.getClientes();
    }

    public nuevo() {
        this.dialogService.open(ClienteFormComponent, {
            header: 'Nuevo cliente',
            width: 'auto',
            contentStyle: {'max-height': '350px', 'overflow': 'auto'},
        });
    }

    public selected(row) {
        this.dialogService.open(ClienteFormComponent, {
            header: 'Nuevo cliente',
            width: 'auto',
            contentStyle: {'max-height': '350px', 'overflow': 'auto'},
            data: row["data"]
        });
    }

}
