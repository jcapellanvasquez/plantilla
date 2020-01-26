import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {RequestModel, UsuarioModel} from '../../utils';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  public form: FormGroup;
  public message: BehaviorSubject<string> = new BehaviorSubject<string>('')


  constructor(
    public service: LoginService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  public login() {
    if (this.form.valid) {
      this.service.getToken(this.form.value).subscribe((response: RequestModel<UsuarioModel>) => {
        if (response.getStatusCode() === 1) {
          this.router.navigate(['/']);
          this.service.setSession(response.getData().getToken())
        } else {
          this.message.next(response.getMessage())
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
