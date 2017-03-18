import { Component } from '@angular/core';
import { BeerService } from './shared/services/beer.service';
import { CalculationService } from './shared/services/calculation.service';
import { GeolocationService } from './shared/services/geolocation.service';
import { ToiletService } from './shared/services/toilet.service';
import { Place } from './shared/models/place';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {

  userLocation: Place;

  constructor( private bs: BeerService,
              private cs: CalculationService,
              private gs: GeolocationService,
              private ts: ToiletService ) { }
  
  message = 'This is the sample message.';

  createUrl(latFrom:number, lonFrom:number, latTo:number, lonTo:number) {
      return `https://www.google.com/maps/dir/${latFrom},${lonFrom}/${latTo},${lonTo}/data=!4m2!4m1!3e2`;
  }
}