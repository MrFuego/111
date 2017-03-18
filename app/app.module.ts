import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

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