import { Component } from '@angular/core';
import { BeerService } from './shared/services/beer.service';
import { CalculationService } from './shared/services/calculation.service';
import { GeolocationService } from './shared/services/geolocation.service';
import { ToiletService } from './shared/services/toilet.service';

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

  constructor( private bs: BeerService,
              private cs: CalculationService,
              private gs: GeolocationService,
              private ts: ToiletService )
  {
      this.gs.getLocation().subscribe(
          data => {
            console.log('lat: ' + data.coords.latitude);
            console.log('lon: ' + data.coords.longitude);
          }
      )
  }
  
  message = 'This is the sample message.';
}