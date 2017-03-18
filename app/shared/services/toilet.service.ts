import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Toilet } from '../models/toilet'

@Injectable()
export class ToiletService {
	private toiletsUrl = 'https://datatank.stad.gent/4/infrastructuur/publieksanitair.geojson'

	constructor(private http: Http) {
	}

	getToilets(): Observable<Toilet []> {
		return this.http.get(toiletsUrl)
						.map(res => res.json().coordinates)
						.map(toilets => toilets.map(this.toToilet)
						.catch(this.handleError);
	}

	private toToilet(toilet): Toilet {
		return {
			lat: toilet[0],
			lng: toilet[1]
		}
	}

	private handleError(): Promise<any> {
		console.error('[ToiletService] An error has occurred...');
		return Promise.reject(error.message || error);
	}
}
