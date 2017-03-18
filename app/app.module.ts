import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CalculationService } from './shared/services/calculation.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';



@NgModule({
  imports: [ 
    BrowserModule,
    AppRouting
   ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NotFoundComponent
    ],
  providers: [
    CalculationService
  ],
  bootstrap: [ 
    AppComponent 
    ]
})

export class AppModule {}