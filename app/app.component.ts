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
              private ts: ToiletService )
  {
      this.gs.getLocation().subscribe(
          data => {
            console.log('lat: ' + data.coords.latitude);
            console.log('lon: ' + data.coords.longitude);
            this.userLocation = new Place;
            this.userLocation.lat = data.coords.latitude;
            this.userLocation.long = data.coords.longitude;
          }
      )

      this.bs.getCafes().subscribe(beer => {
        console.log(beer);
      })
  }
  
  message = 'This is the sample message.';
}