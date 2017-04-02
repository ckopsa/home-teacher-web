import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private af : AngularFire) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.af.auth.getAuth() != null;
        }
}
