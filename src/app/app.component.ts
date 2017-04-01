import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    user = {};
    constructor(
        public af: AngularFire,
        public router: Router,
    ) {
        this.af.auth.subscribe(user => {
            if(user) {
                // user logged in
                this.user = user;
                this.router.navigate(["home"]);
            }
            else {
                // user not logged in
                this.user = {};
                this.router.navigate(["login"]);
            }
        });
    }
}
