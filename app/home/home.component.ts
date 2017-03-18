import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeerService } from '../shared/services/beer.service';
import { CalculationService } from '../shared/services/calculation.service';
import { GeolocationService } from '../shared/services/geolocation.service';
import { ToiletService } from '../shared/services/toilet.service';
import { Place } from '../shared/models/place';

@Component({
  templateUrl: './app/home/home.component.html',
})
export class HomeComponent{
    public gewicht: number = 0;
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

        this.ts.getToilet(userLocation.long, userLocation.lat).subscribe(
          res => {
            toiletLocation.lat = <number>res[0];
            toiletLocation.long = <number>res[1];
            let url = this.createUrl(userLocation.lat, userLocation.long, toiletLocation.long, toiletLocation.lat);
            window.open(url);
          }
        )
      }
    )
  }

  getCafe() {
    let userLocation = new Place;
    let cafeLocation = new Place;
    let userWeight = this.cs.getDistanceToRun(this.gewicht);

    this.gs.getLocation().subscribe(
      data => {
        userLocation.long = data.coords.latitude;
        userLocation.lat = data.coords.longitude;

        var dist = this.cs.getDistanceToRun(+userWeight);


        console.log(dist);
        console.log(this.bs.getCafe(userLocation.long, userLocation.lat, dist));
        this.bs.getCafe(userLocation.long, userLocation.lat, dist).subscribe(
          res => {
            console.log("pint");
            // cafeLocation.lat = <number>res[0];
            // cafeLocation.long = <number>res[1];
            // let url = this.createUrl(userLocation.lat, userLocation.long, cafeLocation.long, cafeLocation.lat);
            // window.open(url);
          }
        )
      }
    )
  }

  createUrl(latFrom: number, lonFrom: number, latTo: number, lonTo: number) {
    return `https://www.google.com/maps/dir/${latFrom},${lonFrom}/${latTo},${lonTo}/data=!4m2!4m1!3e2`;
  }
}