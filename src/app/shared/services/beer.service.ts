import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Place } from '../models/place';

@Injectable()
export class BeerService {
    private baseUrl: string = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fnearbysearch%2Fjson%3F';

    constructor(
        private http: Http
        ) { }

    /**
     * Get all cafes
     * 
     * @param curLang 
     * @param curLong 
     * @param distance 
     */
    getCafes(curLang: number, curLong: number, distance: number): Observable<Place[]> {
        return this.http.get(this.baseUrl + `location%3D${curLang}%2C${curLong}%26radius%3D${distance}%26type%3Dcafe%26key%3DAIzaSyBopo3aqTx8sfurrX8bIhZJ2zzR6-jBEcU%22&format=json&diagnostics=true&callback=`)
            .map(res => res.json().query.results.json.results)
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
    getCafe(curLat, curLong, distance): Observable<Place> {
        return this.http.get(this.baseUrl + `location%3D${curLat}%2C${curLong}%26radius%3D${distance}%26type%3Dcafe%26key%3DAIzaSyBopo3aqTx8sfurrX8bIhZJ2zzR6-jBEcU%22&format=json&diagnostics=true&callback=`)
            .map(res => res.json().query.results.json.results[0])
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
            name: place.name
        }
    }
}