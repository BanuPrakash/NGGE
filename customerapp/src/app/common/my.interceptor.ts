import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn :"root"
})
export class MyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        // req = req.clone({
        //     setHeaders: {
        //       Authorization: `Bearer ${this.auth.getToken()}`
        //     }
        //   });
        console.log(req);
        return next.handle(req);
    }
    
}