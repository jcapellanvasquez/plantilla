import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from '../views/login.service';

@Injectable({
    providedIn: 'root'
})
export class SessionGuard implements CanActivate {

    constructor(private login: LoginService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (state.url == '/login') {
            if (this.login.hasSession()) {
                this.router.navigate(['/interacciones']);
                return false;
            } else {
                return true;
            }
        } else if (state.url === '/interacciones') {
          if (this.login.hasSession()) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }

        return true;
    }

}
