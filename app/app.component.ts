import { Component } from '@angular/core';

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

<<<<<<< HEAD
=======
  constructor( private bs: BeerService,
              private cs: CalculationService,
              private gs: GeolocationService,
              private ts: ToiletService )
  {
  }

  getToilet() {
  	let userLocation = new Place;
	  let toiletLocation = new Place;
  
  	this.gs.getLocation().subscribe(
      data => {
        userLocation.lat = data.coords.latitude;
	    userLocation.long = data.coords.longitude;

	    this.ts.getToilet(userLocation.lat, userLocation.long).subscribe(
		  res => {
		    toiletLocation.lat = <number> res[0];
			toiletLocation.long = <number> res[1];
			console.log(toiletLocation);
		  }
		)
      }
    )
  }

  createUrl(latFrom:number, lonFrom:number, latTo:number, lonTo:number) {
    return `https://www.google.com/maps/dir/${latFrom},${lonFrom}/${latTo},${lonTo}/data=!4m2!4m1!3e2`;
  }
>>>>>>> 7942b6358885653c9b971382e3d0c897b920483a
}
