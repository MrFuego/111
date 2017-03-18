import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

<<<<<<< HEAD
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
=======
import { CalculationService } from './shared/services/calculation.service';

>>>>>>> b2318844812aeba4179e7a278bc51a50b4d5e4a7

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