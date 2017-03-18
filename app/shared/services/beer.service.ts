import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Place } from '../models/place';

@Injectable()
export class BeerService {
    private placesUrl: string = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.0543420,3.7174240&radius=500&type=cafe&key=AIzaSyBopo3aqTx8sfurrX8bIhZJ2zzR6-jBEcU';

    constructor(private http: Http) { }

    /**
     * Get a cafe withing given radius
     */
    getCafes(): Observable<Place[]> {
        return this.http.get(this.placesUrl)
            .map(res => res.json().results)
            .map(places => places.map(this.toPlace))
            .catch(this.handleError);
    }

    /**
     * Handle any errors from the API
     */
    private handleError(err) {
        let errMessage: string;

        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
        } else {
            errMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errMessage);
    }

    /**
     * Convert user info from the API to our standard/format
     */
    private toPlace(place): Place {
        return {
            lat: place.geometry.location.lat,
            long: place.geometry.location.long,
            name: place.name,
        }
    }
}