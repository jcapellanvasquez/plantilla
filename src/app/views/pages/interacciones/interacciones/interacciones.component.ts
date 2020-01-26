import {Component, OnInit} from '@angular/core';
import {DataSourceService} from '../../../data-source.service';
import {DialogService} from 'primeng/dynamicdialog';
import {ClienteFormComponent} from '../../cliente/cliente-form/cliente-form.component';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-interacciones',
    templateUrl: './interacciones.component.html',
    providers: [DialogService]
})
export class InteraccionesComponent implements OnInit {
    public columnDefs = [
        {headerName: 'ID', field: 'id', resize: true, filter: 'agNumberColumnFilter', flex: true},
        {headerName: 'Fecha', field: 'fecha', resize: true, filter: 'agDateColumnFilter', flex: true},
        {headerName: 'Cliente', field: 'cliente', resize: true, filter: 'agTextColumnFilter', flex: true},
        {headerName: 'Usuario', field: 'usuario', resize: true, filter: 'agTextColumnFilter', flex: true},
        {headerName: 'Teléfono', field: 'telefono', resize: true, filter: 'agTextColumnFilter', flex: true},
        {headerName: 'Memo', field: 'memo', resize: true, filter: 'agTextColumnFilter', flex: true},

    ];

    public data$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


    constructor(private dataSource: DataSourceService, public dialogService: DialogService,public router: Router ) {
    }

    ngOnInit() {
        this.dataSource.getInteracciones();

        this.dataSource.interacciones$.subscribe(data => {
            this.data$.next(data.map(i => {
                return {
                    id: i.id,
                    telefono: i.cliente.telefono,
                    cliente: i.cliente.nombre,
                    usuario: i.usuario.nombre + ' ' + i.usuario.apellido,
                    memo: i.memo,
                    fecha: new Date(i.fecha).toLocaleDateString ()
                };
            }));
        });
    }

    public nuevo() {
       this.router.navigate(['/interacciones/crear'])
    }

    public selected(row) {
        // this.dialogService.open(ClienteFormComponent, {
        //     header: 'Nuevo cliente',
        //     width: 'auto',
        //     contentStyle: {'max-height': '350px', 'overflow': 'auto'},
        //     data: row['data']
        // });
    }


}
