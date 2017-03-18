import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { HomeComponent } from './home/home.component';
import { CountdownComponent } from './home/countdown.component';
import { ToiletComponent } from './toilets/toilets.component';
import { UitlegComponent } from './uitleg/uitleg.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BeerService } from './shared/services/beer.service';
import { CalculationService } from './shared/services/calculation.service';
import { GeolocationService } from './shared/services/geolocation.service';
import { ToiletService } from './shared/services/toilet.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';



@NgModule({
  imports: [ 
    BrowserModule,
    AppRouting,
    HttpModule
   ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    CountdownComponent,
    ToiletComponent,
    UitlegComponent,
    NotFoundComponent
    ],
  providers: [
    BeerService,
    CalculationService,
    GeolocationService,
    ToiletService
  ],
  bootstrap: [ 
    AppComponent 
    ]
})

export class AppModule {}