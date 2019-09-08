import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formula-reactivo',
  templateUrl: './formula-reactivo.component.html',
  styleUrls: ['./formula-reactivo.component.scss']
})
export class FormulaReactivoComponent implements OnInit {

  private _nombre: FormControl = new FormControl('',[Validators.required]);
  private _apellido: FormControl = new FormControl('',[Validators.required]);

  private _form: FormGroup = new FormGroup({
    nombre: this.nombre,
    apellido: this.apellido
  })

  constructor() { 
  }

  ngOnInit() {
    console.log(this.form)
  }

    public get nombre() {
      return this._nombre
    }

    public get apellido() {
      return this._apellido;
    }

    public get form() {
      return this._form;
    }

    public submit() {
      if (this.form.valid) {
        alert("Registrado")
      } else {
        this.nombre.markAsTouched()
        this.apellido.markAsTouched()
      }
    }
  
  // private _nombre : string;
  // public get nombre() : string {
  //   return this._nombre;
  // }
  // public set nombre(v : string) {
  //   this._nombre = v;
  // }
  

}
