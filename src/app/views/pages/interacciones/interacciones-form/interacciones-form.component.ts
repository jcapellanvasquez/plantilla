import {Component, OnInit} from '@angular/core';
import {DataSourceService} from '../../../data-source.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {LoginService} from '../../../login.service';
import {InteraccionModel, UsuarioModel} from '../../../../utils';

@Component({
    selector: 'app-interacciones-form',
    templateUrl: './interacciones-form.component.html',
    styles: []
})
export class InteraccionesFormComponent implements OnInit {

    public form: FormGroup;
    public msgs: Message[] = [];
    public isBlocked: boolean = false;

    public options: SelectItem[] = [];

    constructor(
        public dataSource: DataSourceService,
        public login: LoginService,
        public router: Router,
        public fb: FormBuilder,
    ) {
        this.form = this.fb.group({
            clienteId: ['', Validators.required],
            usuarioId: [''],
            memo: ['', Validators.required],
            id: ['0'],
        });

        this.dataSource.getClientes();

        this.dataSource.clientes$.subscribe(data => this.options = data.map(i => {
            this.unLock();
            return {label: i.nombre, value: i.id};
        }));
    }

    ngOnInit() {

        this.block();
    }

    public save() {
        if (this.form.valid) {

            let params = this.form.getRawValue();
            let interaccion: InteraccionModel = new InteraccionModel(
                0,
                params["memo"],
                0,
                params["clienteId"],
                params["usuarioId"],
                true,
                this.dataSource.clientes$.value.find(c => c.id=params['clienteId']),
                new UsuarioModel(this.login.getUserSession().id)
            )

            if (this.form.get('id').value > 0) {
                this.dataSource.updateInteraccion(interaccion).subscribe(response => {
                    if (response.statusCode == 201) {
                        this.msgs.push({severity: 'success', summary: response.message, detail: ''});
                    } else {
                        this.msgs.push({severity: 'error', summary: response.message, detail: ''});
                    }
                });
            } else {

                this.dataSource.setInteraccion(interaccion).subscribe(response => {
                    if (response.statusCode == 201) {
                        this.msgs.push({severity: 'success', summary: response.message, detail: ''});
                        this.form.patchValue({
                            clienteId: '',
                            usuarioId: '',
                            memo: ''
                        });
                    } else {
                        this.msgs.push({severity: 'error', summary: response.message, detail: ''});
                    }
                });
            }
            this.form.controls["clienteId"].markAsPristine()
            this.form.controls["memo"].markAsPristine()

        } else {
            this.form.controls["clienteId"].markAsDirty()
            this.form.controls["memo"].markAsDirty()
        }
    }

    public cancelar() {
        this.router.navigate(['/interacciones']);
    }

    public block() {
        this.isBlocked = true;
    }

    public unLock() {
        this.isBlocked = false;
    }
}
