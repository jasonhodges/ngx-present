import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<nav><a routerLink="/slides" routerLinkActive="active">Slides</a></nav>-->
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
