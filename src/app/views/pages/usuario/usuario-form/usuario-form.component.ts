import {Component, OnInit} from '@angular/core';
import {DataSourceService} from '../../../data-source.service';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message, MessageService} from 'primeng/api';
import {CustomValidators, UsuarioModel} from '../../../../utils';

@Component({
    selector: 'app-usuario-form',
    templateUrl: './usuario-form.component.html',
    styles: [],
    providers: [MessageService]
})
export class UsuarioFormComponent implements OnInit {

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
            apellido: ['', [Validators.required]],
            username: ['', Validators.required],
            password: ['',],
            cpassword: [''],

        }, {validators: CustomValidators.samePassword});
    }

    ngOnInit() {

        if (this.config.data) {
            this.form.patchValue({...this.config.data});
        }
    }

    public close() {
        this.ref.close();
    }

    public save() {
        if (this.form.valid) {
            if (this.form.get('id').value > 0) {
                this.dataSource.updateUsuario(Object.assign(new UsuarioModel(), this.form.value)).subscribe(response => {
                    if (response.statusCode == 201) {
                        this.msgs.push({severity: 'success', summary: response.message, detail: ''});
                        this.dataSource.getUsuarios();

                    } else {
                        this.msgs.push({severity: 'error', summary: response.message, detail: ''});
                    }
                });
            } else {
                this.dataSource.setUsuario(Object.assign(new UsuarioModel(), this.form.value)).subscribe(response => {
                    if (response.statusCode == 201) {
                        this.msgs.push({severity: 'success', summary: response.message, detail: ''});
                        this.form.patchValue({
                            nombre: '',
                            username: '',
                            apellido: '',
                            password: '',
                            cpassword: '',
                            id: '0'
                        });

                        this.dataSource.getUsuarios();

                    } else {
                        this.msgs.push({severity: 'error', summary: response.message, detail: ''});
                    }
                });
            }
        }
    }

}
