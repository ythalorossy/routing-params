import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';

const APP_ROUTES: RouterConfig = [
    { path: 'user/:id', component: UserComponent },
    { path: '' , component: HomeComponent },
];

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
];