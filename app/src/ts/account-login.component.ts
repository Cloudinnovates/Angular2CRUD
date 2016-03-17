import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ApiService} from './api.service';

@Component({
    selector: 'login',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <h4>Login</h4>

        <span *ngIf="loginError">
            Invalid Email/Password Combination. 
            Please Try Again.
            <br>
            <br>
        </span>

        <form #f="ngForm" (ngSubmit)="onSubmit(email.value, password.value)">
            <label for="email">Email</label>
            <input type="email" #email id="email" required>

            <label for="password">Password</label>
            <input type="password" #password required>

            <button type="submit">Submit</button>
            <a [routerLink]="['Create']">Create Account</a>
        </form>

        <br>
        <br>
        
        Example Account: Email: test@test.com, Password: abcdef
    `
})
export class AccountLoginComponent {
    public loginError = false; // True if there is a login error.

    /**
     * AccountLoginComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router,
                private _apiService: ApiService) {}

    /**
     * Submit click handler.
     */
    onSubmit(email, password) {
        this.loginError = false;

        this._apiService.loginAccount(email, password, success => {
            if (success) {
                this._router.navigate(['Dashboard/Contacts']);
            } else {
                this.loginError = true;
            }
        });
    }
}