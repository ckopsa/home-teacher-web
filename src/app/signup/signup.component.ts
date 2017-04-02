import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    email = '';
    password = '';
    constructor(public af : AngularFire,
                public router : Router) { }

    ngOnInit() {
    }

    signup() {
        this.af.auth.createUser({email: this.email, password: this.password}).then(() => this.router.navigate(["home"]));
    }

    cancel() {
        this.router.navigate(["login"]);
    }
}
