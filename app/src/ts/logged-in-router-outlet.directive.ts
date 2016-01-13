import {Directive, ElementRef, DynamicComponentLoader, Attribute} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {ApiService} from './api.service';

@Directive({
    selector: 'logged-in-router-outlet',
    providers: [ApiService]
})
export class LoggedInRouterOutletDirective extends RouterOutlet {
    public publicRoutes: any; // Public route dictionary.
    
    /**
     * LoggedInRouterOutletDirective Constructor.
     */
    constructor(_elementRef: ElementRef,
                _loader: DynamicComponentLoader,
                private _parentRouter: Router,
                @Attribute('name') nameAttr: string,
                private _apiService: ApiService) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.publicRoutes = { // Dictionary of routes anyone can access (no auth required).
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
    activate(instruction: ComponentInstruction) {
        var url = this._parentRouter.lastNavigationAttempt;

        if (!this.publicRoutes[url] && !this._apiService.getLocalStorageSession()) {
            this._parentRouter.navigate(['Login']);
        }
        return super.activate(instruction);
    }
}