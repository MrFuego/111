import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    template: `
      <div class="countdown-component">
        <span class="countdown-component__number" id="count3">3</span>
        <span class="countdown-component__number" id="count2">2</span>
        <span class="countdown-component__number" id="count1">1</span>
      </div>
    `
})
export class CountdownComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}