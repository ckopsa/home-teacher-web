import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userid: String;
    items: FirebaseListObservable<any[]>;
    item: FirebaseObjectObservable<any>;
    pingText;
    userEmail;
    constructor(public af: AngularFire,
                private router : Router) {
        af.auth.subscribe(user => {
            if (user) {
            this.item = af.database.object('/users/' + user.uid);
            this.items = af.database.list('/users/' + user.uid);
            this.userEmail = user.auth.email;
            } else {
                this.router.navigate(['login']);
            }
        });
    }

    ngOnInit() {
    }

    logout() {
        this.af.auth.logout().then(result => this.router.navigate(['login']));
    }

    ping() {
        this.item.set({text: this.pingText});
    }
}
