import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';

@Component({
    selector: 'login',
    template: `
    <section class="section--center mdl-grid">
        <div class="landing-card mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h4 class="mdl-card__title-text">Login</h4>
            </div>

            <span class="center error mdl-card__supporting-text" *ngIf="loginError">
                <br>
                Invalid Email/Password Combination. 
                <br>
                Please Try Again.
                <br>
            </span>

            <div class="mdl-card__supporting-text">
                <form #f="ngForm" (ngSubmit)="onSubmit(email.value, password.value)">
                    <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="email" #email id="email" required>
                        <label class="mdl-textfield__label" for="email">Email</label>
                    </div>

                    <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="password" #password required>
                        <label class="mdl-textfield__label" for="password">Password</label>
                    </div>

                    <br>
                    <br>

                    <div class="center mdl-card__actions mdl-card--border">
                        <br>
                        <button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Submit</button>
                        <a href="create" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Create Account</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
    `,
    styles: []
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
            }
            else {
                this.loginError = true;
            }
        });
    }
}