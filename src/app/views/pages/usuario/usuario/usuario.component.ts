import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {DataSourceService} from '../../../data-source.service';
import {MessageService} from 'primeng/api';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ClienteFormComponent} from '../../cliente/cliente-form/cliente-form.component';
import {UsuarioFormComponent} from '../usuario-form/usuario-form.component';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css'],
    providers: [DialogService]
})
export class UsuarioComponent implements OnInit {


    public columnDefs = [
        {headerName: 'ID', field: 'id', resize: true, filter: 'agNumberColumnFilter', flex: true},
        {headerName: 'Nombre', field: 'nombre', resize: true, filter: 'agTextColumnFilter', flex: true},
        {headerName: 'Apellido', field: 'apellido', resize: true, filter: 'agTextColumnFilter', flex: true},
        {headerName: 'Username', field: 'username', resize: true, filter: 'agTextColumnFilter', flex: true},

    ];


    constructor(
        public dataSource: DataSourceService,
        public dialogService: DialogService
    ) {

    }

    ngOnInit() {
        this.dataSource.getUsuarios();
    }

    public nuevo() {
        this.dialogService.open(UsuarioFormComponent, {
            header: 'Nuevo usuario',
            width: 'auto',
            contentStyle: {'overflow': 'auto'},
        });
    }

    public selected(row) {
        this.dialogService.open(UsuarioFormComponent, {
            header: 'Nuevo usuario',
            width: 'auto',
            contentStyle: {'max-height': '450px', 'overflow': 'auto'},
            data: row['data']
        });
    }
}
