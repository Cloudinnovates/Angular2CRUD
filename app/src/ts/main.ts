// main.ts

import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {API_PROVIDERS} from './api';
import {CrudAppComponent} from './crud-app.component';

bootstrap(CrudAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, API_PROVIDERS]);
