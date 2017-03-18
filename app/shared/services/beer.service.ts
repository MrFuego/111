import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Place } from '../models/place';

@Injectable()
export class BeerService {
    private baseUrl: string = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

    constructor(private http: Http) { }

    /**
     * Get all cafes
     * 
     * @param curLang 
     * @param curLong 
     * @param distance 
     */
    getCafes(curLang: number, curLong: number, distance: number): Observable<Place[]> {
        return this.http.get(this.baseUrl + `location=${curLang},${curLong}&radius=${distance}&type=cafe&key=AIzaSyBopo3aqTx8sfurrX8bIhZJ2zzR6-jBEcU`)
            .map(res => res.json().results)
            .map(places => places.map(this.toPlace))
            .catch(this.handleError);
    }

    /**
     * Get cafe
     * 
     * @param curLang
     * @param curLong 
     * @param distance 
     */
    getCafe(curLang: number, curLong: number, distance: number): Observable<Place> {
        return this.http.get(this.baseUrl + `location=${curLang},${curLong}&radius=${distance}&type=cafe&key=AIzaSyBopo3aqTx8sfurrX8bIhZJ2zzR6-jBEcU&results=1`)
            .map(res => res.json().results[0])
            .map(this.toPlace)
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
            long: place.geometry.location.lng,
            name: place.name,
        }
    }
}