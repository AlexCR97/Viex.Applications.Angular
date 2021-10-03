import { Component, OnInit } from '@angular/core';

const template = /*html*/`
<div class="card">

  <div class="card-header">
    <ng-content select="[vxCardHeader]"></ng-content>
  </div>

  <div class="card-body">
    <ng-content select="[vxCardBody]"></ng-content>
  </div>

  <div class="card-footer">
    <ng-content select="[vxCardFooter]"></ng-content>
  </div>

  <ng-content></ng-content>

</div>
`

@Component({
  selector: 'vx-card',
  template,
})
export class VxCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
