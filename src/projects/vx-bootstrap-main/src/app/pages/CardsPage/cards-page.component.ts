import { Component, OnInit } from '@angular/core';

const template = /*html*/`
<div class="container">
  <h2>Cards</h2>
  <hr>
  <div class="mb-5"></div>


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
