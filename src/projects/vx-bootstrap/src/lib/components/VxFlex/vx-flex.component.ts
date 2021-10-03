import { Component, Input, OnInit } from '@angular/core';
import { VxAlignItems, VxJustifyConent } from '../../types';

const template = /*html*/`
<div class="d-flex" [ngStyle]="flexStyle">
  <ng-content></ng-content>
</div>
`

@Component({
  selector: 'vx-flex',
  template,
})
export class VxFlexComponent implements OnInit {

  @Input() justify: VxJustifyConent = 'start'
  @Input() align: VxAlignItems = 'start'

  constructor() { }

  ngOnInit(): void {
  }

  get flexStyle() {
    return {
      'justify-content': this.justify,
      'align-items': this.align,
    }
  }

}
