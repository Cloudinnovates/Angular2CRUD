import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';

@Component({
    selector: 'create',
    template: `
        <section class="section--center mdl-grid">
            <div class="landing-card mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h4 class="mdl-card__title-text">Create Account</h4>
                </div>


                <div class="mdl-card__supporting-text">
                    <form #f="ngForm" (ngSubmit)="onSubmit(email.value, password.value)">
                        <div class="mdl-textfield mdl-js-textfield">
                            <input type="email" #email class="mdl-textfield__input" id="email" required>
                            <label class="mdl-textfield__label" for="email">Email</label>
                        </div>
                        
                        <div class="mdl-textfield mdl-js-textfield">
                            <input type="password" #password class="mdl-textfield__input" required>
                            <label class="mdl-textfield__label" for="password">Password</label>
                        </div>

                        <br>
                        <br>

                        <div class="center mdl-card__actions mdl-card--border">
                            <br>
                            <button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Submit</button>
                            <a href="login" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Goto Login Page</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    `
})
export class AccountCreateComponent {

    /**
     * CreateComponent Constructor.
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
        this._apiService.createAccount(email, password, success => {
            if (success) {
                this._router.navigate(['Login']);
            }
        });
    }
}