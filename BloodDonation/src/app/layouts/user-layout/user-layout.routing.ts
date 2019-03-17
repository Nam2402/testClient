import { Routes } from '@angular/router';
import { HomePageComponent } from '../../home-page/home-page.component';
import { EventComponent } from '../../events/event.component';

export const UserLayoutRoutes: Routes = [

    { path: 'home-page',   component: HomePageComponent },
    { path: 'event',   component: EventComponent }
];
