import { Component, Input, OnInit } from '@angular/core';
import { VxButtonVariant, VxComponentSize } from '../../types';

const template = /*html*/`
<button class="btn d-flex justify-content-center align-items-center p-0"
  [ngClass]="iconButtonClass"
  [ngStyle]="iconButtonStyle">
  <vx-icon [icon]="icon"></vx-icon>
</button>
`

@Component({
  selector: 'vx-icon-button',
  template,
})
export class VxIconButtonComponent implements OnInit {

  @Input() icon = 'bootstrap'
  @Input() outlined = false
  @Input() rounded = false
  @Input() size: VxComponentSize = 'md'
  @Input() variant: VxButtonVariant | undefined

  constructor() { }

  ngOnInit(): void {
  }

  get iconButtonClass() {
    const classes: string[] = []

    if (this.rounded)
      classes.push('rounded-circle')

    if (this.outlined)
      classes.push(`btn-outline-${this.variant}`)
    else
      classes.push(`btn-${this.variant}`)
    
    return classes
  }

  get iconButtonStyle() {
    return {
      'width': '40px',
      'height': '40px',
    }
  }

}
