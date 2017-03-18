import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class CalculationService{


    constructor(){}


    /**
     * Calculate Callories 
     * 
     * MET waarde lopen 7
     * 
     * ((MET * 3,5) * gewicht in kilo)/200 = caloriën per minuut
     * 9km/h -> 150m/m
     */

    getDistanceToRun(gewicht: number){
        let minuten = 111*200*(24.5 * gewicht);
        let afstand = minuten * 150
        return afstand;
    }


}
