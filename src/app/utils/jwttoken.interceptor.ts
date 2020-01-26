import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {LoginService} from '../views/login.service';

@Injectable()
export class JWTTokenInterceptor implements HttpInterceptor {

    constructor(public router: Router, private login: LoginService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {



        // const token: string = localStorage.getItem('token');
        //
        // if (token) {
        //   request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        // }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        }

        request = request.clone({headers: request.headers.set('Accept', 'application/json')});

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                    // if (event.status === 403) {
                    //     this.login.clearSession();
                    //     this.router.navigate(['/403']);
                    // }

                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 403) {
                    this.login.clearSession();
                    this.router.navigate(['/403']);
                }
                return throwError(error);
            }));

    }
}
