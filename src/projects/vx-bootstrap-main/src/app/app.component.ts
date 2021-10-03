import { Component } from '@angular/core';

const template = /*html*/`
<div class="my-4">

  <h1 class="text-center">Vx Bootstrap</h1>

  <router-outlet></router-outlet>

</div>
`

@Component({
  selector: 'app-root',
  template,
})
export class AppComponent {



}
