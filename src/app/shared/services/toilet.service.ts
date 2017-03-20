import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Toilet } from '../models/toilet'

@Injectable()
export class ToiletService {
	private toiletsUrl = 'https://datatank.stad.gent/4/infrastructuur/publieksanitair.geojson'

	constructor(private http: Http) {
	}
	
	/**
	 * Returns an array of the format `[lat, lng, distance]` containing the
	 * coordinates of the closest toilet to a given (lat, lng) pair.
	 */
	getToilet(lat: number, lng: number): Observable<Object[]> {
		return this.http.get(this.toiletsUrl)
		.map(res => res.json().coordinates)
		.map(toilets => toilets.map(t => [t[0], t[1],
									      this.getDistanceFromLatLonInKm(t[0], t[1], lat, lng)]))
		.map(toilets => toilets.sort((t1, t2) => t1[2] - t2[2]))
		.map(toilets => toilets[0])
		.catch(this.handleError);
	}

	private getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
		var R = 6371; // Radius of the earth in km
		var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
		var dLon = this.deg2rad(lon2-lon1);
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
				Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
				Math.sin(dLon/2) * Math.sin(dLon/2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		return d;
	}

	private deg2rad(deg) {
		return deg * (Math.PI/180)
	}

	private handleError(error: Response | any): Promise<any> {
		console.error('[ToiletService] An error has occurred...');
		return Promise.reject(error.message || error);
	}
}
