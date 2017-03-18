import { Component } from '@angular/core';

@Component({
    template: `
    <div class="jumbotron text-center">
        <h1>404 Not Found</h1>
        <p>You may be lost. Follow the breadcrumbs back <a routerLink="/">home</a>.</p>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/rpWrtXyEAN0"></iframe>
        </div>
    </div>
    `
})
export class NotFoundComponent{}