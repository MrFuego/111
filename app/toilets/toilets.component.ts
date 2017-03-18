import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToiletService } from '../shared/services/toilet.service';
import { Toilet } from '../shared/models/toilet';

@Component({
    template: `I'm the toilet component`,
    styles: [`
    `]
})
export class ToiletComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}