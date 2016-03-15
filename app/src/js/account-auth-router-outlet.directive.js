System.register(['angular2/core', 'angular2/router', './api.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, api_service_1;
    var AccountAuthRouterOutletDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            AccountAuthRouterOutletDirective = (function (_super) {
                __extends(AccountAuthRouterOutletDirective, _super);
                /**
                 * AccountAuthRouterOutletDirective Constructor.
                 */
                function AccountAuthRouterOutletDirective(_elementRef, _loader, _parentRouter, nameAttr, _apiService) {
                    _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
                    this._apiService = _apiService;
                    this.parentRouter = _parentRouter;
                    this.publicRoutes = {
                        '': true,
                        '/login': true,
                        '/create': true
                    };
                }
                /**
                 * Called by the Router to instantiate a new component during the commit phase of a navigation.
                 * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
                 *
                 * REF: https://github.com/angular/angular/blob/2.0.0-beta.1/modules/angular2/src/router/router_outlet.ts
                 */
                AccountAuthRouterOutletDirective.prototype.activate = function (instruction) {
                    var url = this.parentRouter.lastNavigationAttempt;
                    console.log(this.parentRouter);
                    if (!this.publicRoutes[url] && !this._apiService.getLocalStorageSession()) {
                        this.parentRouter.navigate(['Login']);
                    }
                    return _super.prototype.activate.call(this, instruction);
                };
                AccountAuthRouterOutletDirective = __decorate([
                    core_1.Directive({
                        selector: 'account-auth-router-outlet',
                        providers: [api_service_1.ApiService]
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String, api_service_1.ApiService])
                ], AccountAuthRouterOutletDirective);
                return AccountAuthRouterOutletDirective;
            }(router_1.RouterOutlet));
            exports_1("AccountAuthRouterOutletDirective", AccountAuthRouterOutletDirective);
        }
    }
});
