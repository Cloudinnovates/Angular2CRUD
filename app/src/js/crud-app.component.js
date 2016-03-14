System.register(['angular2/core', 'angular2/router', './account-login.component', './account-create.component', './account-auth-router-outlet.directive', './dashboard.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, account_login_component_1, account_create_component_1, account_auth_router_outlet_directive_1, dashboard_component_1;
    var CrudAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_login_component_1_1) {
                account_login_component_1 = account_login_component_1_1;
            },
            function (account_create_component_1_1) {
                account_create_component_1 = account_create_component_1_1;
            },
            function (account_auth_router_outlet_directive_1_1) {
                account_auth_router_outlet_directive_1 = account_auth_router_outlet_directive_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            CrudAppComponent = (function () {
                function CrudAppComponent() {
                }
                CrudAppComponent = __decorate([
                    core_1.Component({
                        selector: 'crud-app',
                        directives: [account_auth_router_outlet_directive_1.AccountAuthRouterOutletDirective],
                        template: "\n        <account-auth-router-outlet></account-auth-router-outlet> <!-- Display views produced by the router. -->\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Login', component: account_login_component_1.AccountLoginComponent },
                        { path: '/dashboard/...', name: 'Dashboard', component: dashboard_component_1.DashboardComponent },
                        { path: '/login', name: 'Login', component: account_login_component_1.AccountLoginComponent },
                        { path: '/create', name: 'Create', component: account_create_component_1.AccountCreateComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], CrudAppComponent);
                return CrudAppComponent;
            }());
            exports_1("CrudAppComponent", CrudAppComponent);
        }
    }
});
