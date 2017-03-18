import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CountdownComponent } from './home/countdown.component';
import { NotFoundComponent} from './not-found/not-found.component';


const appRoutes: Routes =[
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'countdown',
        component: CountdownComponent

    },
    { path: '**', component: NotFoundComponent }
]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);