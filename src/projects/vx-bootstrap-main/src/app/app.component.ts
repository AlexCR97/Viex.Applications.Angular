import { Component } from '@angular/core';
import { StaticRoutes } from './app-routing.routes';

const template = /*html*/`
<div class="container my-5">

  <h1 class="text-center">Vx Bootstrap</h1>

  <div class="mb-4">
    <vx-flex>
      <span *ngFor="let item of routes" class="me-3" [routerLink]="item">
        <vx-button [label]="item" [outlined]="true" variant="secondary"></vx-button>
      </span>
    </vx-flex>
  </div>

  <router-outlet></router-outlet>

</div>
`

@Component({
  selector: 'app-root',
  template,
})
export class AppComponent {

  routes = [
    StaticRoutes.buttons,
    StaticRoutes.cards,
    StaticRoutes.menus,
    StaticRoutes.tooltips,
  ]

}
