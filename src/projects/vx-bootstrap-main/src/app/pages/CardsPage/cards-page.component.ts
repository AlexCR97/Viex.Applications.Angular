import { Component, OnInit } from '@angular/core';

const template = /*html*/`
<div class="container">
  <h2>Cards</h2>
  <hr>
  <div class="mb-5"></div>

  <div class="mb-5">
    <h5>Simple Card</h5>
    <vx-card>
      <div body>
        <p class="m-0">This is a simple card</p>
      </div>
    </vx-card>
  </div>
  
  <div class="mb-5">
    <h5>Card Sections</h5>
    <vx-card>
      <div header>
        <h6 class="m-0">Card Header</h6>
      </div>
      <div body>
        <p class="m-0">Card Body</p>
      </div>
      <div footer>
        <p class="m-0">Card Footer</p>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h5>Card Shadows</h5>
    <vx-card>
      <div body>

        <div class="my-4">
          <vx-card>
            <div body>No Shadow</div>
          </vx-card>
        </div>

        <div class="my-4">
          <vx-card shadow="sm">
            <div body>Small shadow</div>
          </vx-card>
        </div>

        <div class="my-4">
          <vx-card shadow="md">
            <div body>Medium/Normal shadow</div>
          </vx-card>
        </div>

        <div class="my-4">
          <vx-card shadow="lg">
            <div body>Large shadow</div>
          </vx-card>
        </div>

      </div>
    </vx-card>
  </div>

</div>
`

@Component({
  selector: 'app-cards-page',
  template,
})
export class CardsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
