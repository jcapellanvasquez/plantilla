import {Component, OnInit} from '@angular/core';
import {EjemploService} from '../ejemplo.service';

@Component({
  selector: 'app-ejemplo-servicio',
  templateUrl: './ejemplo-servicio.component.html',
  styleUrls: ['./ejemplo-servicio.component.css']
})
export class EjemploServicioComponent implements OnInit {

  public todos: any[] = [];

  constructor(public dataSource: EjemploService) {
  }

  ngOnInit() {

    this.dataSource.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

}
