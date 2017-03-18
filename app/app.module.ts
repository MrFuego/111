import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

import { CalculationService } from './shared/services/calculation.service';

@NgModule({
  imports: [ 
    BrowserModule
   ],
  declarations: [ 
    AppComponent
    ],
  providers: [
    CalculationService
  ],
  bootstrap: [ 
    AppComponent 
    ]
})

export class AppModule {}