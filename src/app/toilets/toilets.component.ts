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
constructor(private ts: ToiletService) {
ts.getToilet(3.7174, 51.0543).subscribe(data => { console.log(data) });
}

    ngOnInit() { }
}
