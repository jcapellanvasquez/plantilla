import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  public form: FormGroup;


  constructor(
    public service: LoginService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {

    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  public login() {
    this.service.getToken(this.form.value).subscribe(data => {
      if (data['statusCode'] === 1) {
        // alert("Sesion Iniciada");
        this.router.navigate(['/']);
        this.service.setSession(JSON.stringify(data));

      } else {
        alert('Credenciales erroneas');
      }
    });
  }

}
