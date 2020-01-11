import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ageRangeValidator} from '../custom.validators';

@Component({
  selector: 'app-ejemplo-form',
  templateUrl: './ejemplo-form.component.html',
  styleUrls: ['./ejemplo-form.component.css']
})
export class EjemploFormComponent implements OnInit {

  public form: FormGroup;


  constructor(public formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      ck: [false, [Validators.requiredTrue]],
      edad: ['0', [ageRangeValidator]]
    });
  }

  ngOnInit() {

    // console.log(this.form);
  }

  public save() {
    console.log(this.form);
  }

  public getEmail(): AbstractControl {
    return this.form.get('email');
  }

  public getEdad(): AbstractControl {
    return this.form.get('edad');
  }

}
