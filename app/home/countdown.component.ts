import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <div class="jumbotron text-center">
        <h1>Countdown</h1>
        <h2>3</h2>
            <p><a [routerLink]="['uitleg']" class="btn btn-primary" role="button">Redirect</a>
    </div>
    `
})
export class CountdownComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}