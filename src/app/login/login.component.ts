import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email = '';
    password = '';
    constructor(public af: AngularFire,
                public router: Router) {
    }
    login() {
        this.af.auth.login({
            email: this.email,
            password: this.password,
        },
        {
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        });
    }

    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Redirect
        });
    }

    logout() {
        this.af.auth.logout();
    }

    signup() {
        this.router.navigate(['signup']);
    }

    ngOnInit() {
    }
}
