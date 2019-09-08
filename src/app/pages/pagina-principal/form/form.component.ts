import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public nombre: string = ""
  public apellido: string = ""

  constructor(
    public appService: AppService
  ) { }

  ngOnInit() {
  }

  add() {
    // this.appService.persona = {
    //   nombre: this.nombre,
    //   apellido: this.apellido
    // }

    this.appService.setUser2(
      "Usuario1",
      "Usuario1",
      "Usuario1",
      "Usuario1"
    ).subscribe(
      (next) => {
        console.log("Registro exitoso")
        this.appService.users$ = this.appService.getMyUsers()
      },
      (error) => {
        console.log("Ocurrio un error")
      },
      () => { // complete
        console.log("Registro completado")
      }
    )
  }

}
