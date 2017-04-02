import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private af : AngularFire,
                private router : Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if (this.af.auth.getAuth() != null) {
                return true;
            }
            this.router.navigate(["login"]);

            return false;

        }
}
