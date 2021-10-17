import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { StaticRoutes, StaticRoutesPaths } from './app-routing.routes';

const template = /*html*/`
<div class="container my-5">

  <h1 class="text-center mb-4">Vx Bootstrap</h1>

  <div class="mb-4">
    <vx-flex>
      <span *ngFor="let item of routes" class="me-3" [routerLink]="item">
        <vx-button [label]="item" [outlined]="true" variant="secondary"></vx-button>
      </span>
    </vx-flex>
  </div>

  <router-outlet></router-outlet>

</div>

<div id="vxNotificationsContainer">
  <ng-template #vxNotificationsViewContainerRef></ng-template>
</div>
`

@Component({
  selector: 'app-root',
  template,
})
export class AppComponent {

  @ViewChild('vxNotificationsViewContainerRef', { read: ViewContainerRef })
  vxNotificationsViewContainerRef!: ViewContainerRef

  routes = StaticRoutesPaths

}
