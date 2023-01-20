import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = sessionStorage.getItem('token')
        if (token) {
            const tokenizedRequest = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            })
            return next.handle(tokenizedRequest);
        }
        return next.handle(req)

    }
}