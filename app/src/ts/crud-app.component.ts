import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {AccountLoginComponent} from './account-login.component';
import {AccountCreateComponent} from './account-create.component';
import {AuthRouterOutletDirective} from './auth-router-outlet.directive';
import {DashboardComponent} from './dashboard.component';

@Component({
    selector: 'crud-app',
    directives: [AuthRouterOutletDirective],
    template: `
        <auth-router-outlet></auth-router-outlet> <!-- Display views produced by the router. -->
    `
})
@RouteConfig([ // Configure a router with RouteDefinitions, each mapping a URL path to a component.
    { path: '/', name: 'Login', component: AccountLoginComponent },
    { path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent },
    { path: '/login', name: 'Login', component: AccountLoginComponent },
    { path: '/create', name: 'Create', component: AccountCreateComponent }
])
export class CrudAppComponent {}