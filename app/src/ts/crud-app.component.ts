import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AccountLoginComponent} from './account-login.component';
import {AccountCreateComponent} from './account-create.component';
import {DashboardComponent} from './dashboard.component';

@Component({
    selector: 'crud-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <router-outlet></router-outlet> <!-- Display views produced by the router. -->
    `
})
@RouteConfig([ // Configure a router with RouteDefinitions, each mapping a URL path to a component.
    { path: '/', name: 'Login', component: AccountLoginComponent },
    { path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent }, // ... denotes sub-routes in DashboardComponent.
    { path: '/login', name: 'Login', component: AccountLoginComponent },
    { path: '/create', name: 'Create', component: AccountCreateComponent }
])
export class CrudAppComponent {}