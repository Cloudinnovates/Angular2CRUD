System.register(['angular2/core', 'angular2/router', './contact-list.component', './contact-detail.component', './contact-new.component', './contact-edit.component', './api.service'], function(exports_1, context_1) {
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
    var core_1, router_1, contact_list_component_1, contact_detail_component_1, contact_new_component_1, contact_edit_component_1, api_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (contact_detail_component_1_1) {
                contact_detail_component_1 = contact_detail_component_1_1;
            },
            function (contact_new_component_1_1) {
                contact_new_component_1 = contact_new_component_1_1;
            },
            function (contact_edit_component_1_1) {
                contact_edit_component_1 = contact_edit_component_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                /**
                 * DashboardComponent Constructor.
                 *
                 * @param {Router} _router - Private Router injected into this component.
                 * @param {ApiService} _apiService - Private ApiService injected into this component.
                 * Note: Underscore convention in Angular 2 signifies a private variable.
                 */
                function DashboardComponent(_router, _apiService) {
                    this._router = _router;
                    this._apiService = _apiService;
                }
                /**
                 * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
                 * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
                 */
                DashboardComponent.prototype.ngOnInit = function () {
                    this._apiService.init();
                    this.email = this._apiService.getLoggedInAccountEmail();
                };
                /**
                 * Logout click callback.
                 */
                DashboardComponent.prototype.onLogout = function () {
                    var _this = this;
                    this._apiService.logoutAccount(function (success) {
                        if (success) {
                            _this._router.navigate(['Login']);
                        }
                    });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [api_service_1.ApiService],
                        template: "\n        <br>\n\n        <nav>\n            <button [routerLink]=\"['Contacts']\">Contact List</button> | <!-- Bind clickable HTML to a route. -->\n            <button [routerLink]=\"['ContactNew']\">New Contact</button> |\n            <button (click)=\"onLogout()\">Logout</button> |\n            <span>{{email}}</span>\n        </nav>\n\n        <br>\n\n        <router-outlet></router-outlet> <!-- Display views produced by the router. -->\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent },
                        { path: '/contact/new', name: 'ContactNew', component: contact_new_component_1.ContactNewComponent },
                        { path: '/contact/:id', name: 'ContactDetail', component: contact_detail_component_1.ContactDetailComponent },
                        { path: '/contact/edit/:id', name: 'ContactEdit', component: contact_edit_component_1.ContactEditComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, api_service_1.ApiService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
