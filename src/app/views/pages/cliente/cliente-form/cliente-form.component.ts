import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataSourceService} from '../../../data-source.service';
import {ClienteModel} from '../../../../utils/cliente-model';
import {MessageService} from 'primeng/api';
import {Message} from 'primeng//api';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.css'],
    providers: [MessageService]
})
export class ClienteFormComponent implements OnInit, OnDestroy {

    public display: boolean = false;
    public activo: FormControl = new FormControl('false');
    public form: FormGroup;
    public msgs: Message[] = [];

    constructor(
        public fb: FormBuilder,
        public dataSource: DataSourceService,
        private messageService: MessageService,
        public dialogService: DialogService,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) {
        this.form = this.fb.group({
            id: ['0'],
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            telefono: ['', Validators.required]

        });

        this.form.addControl('activo',this.activo)
    }

    ngOnInit() {

        if (this.config.data) {
            this.form.patchValue({...this.config.data})
        } else {
            this.activo.disable()
        }
    }

    public close() {
        this.ref.close()
    }

    public save() {
        if (this.form.valid) {
            if (this.form.get('id').value > 0) {
                this.dataSource.updateCliente(Object.assign(new ClienteModel(), this.form.value)).subscribe(response => {
                    if (response.statusCode == 201) {
                        this.msgs.push({severity: 'success', summary: response.message, detail: ''});
                        this.dataSource.getClientes();

                    } else {
                        this.msgs.push({severity: 'error', summary: response.message, detail: ''});
                    }
                });
            } else {
                this.dataSource.setCliente(Object.assign(new ClienteModel(), this.form.value)).subscribe(response => {
                    if (response.statusCode == 201) {
                        this.msgs.push({severity: 'success', summary: response.message, detail: ''});
                        this.form.patchValue({
                            nombre: '',
                            email: '',
                            telefono: ''
                        });

                        this.dataSource.getClientes();

                    } else {
                        this.msgs.push({severity: 'error', summary: response.message, detail: ''});
                    }
                });
            }
        }
    }

    public ngOnDestroy(): void {

    }
}
