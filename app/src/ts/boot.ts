// Info about boot.ts: https://angular.io/docs/ts/latest/quickstart.html#!#boot

// ISSUE: https://github.com/angular/angular/blob/master/CHANGELOG.md#200-beta6-2016-02-11
///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {API_PROVIDERS} from './api';
import {CrudAppComponent} from './crud-app.component';

bootstrap(CrudAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, API_PROVIDERS]);
