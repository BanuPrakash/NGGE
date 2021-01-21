import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: "root"
})
export class LinkActivate implements CanActivate {
    
  constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        let user = window.sessionStorage.getItem("user");
        if(user) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
    
}