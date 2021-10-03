import { Component, Input, OnInit } from '@angular/core';
import { VxColorVariant } from '../../types';

const template = /*html*/`
<i [ngClass]="iconClass"></i>
`

@Component({
  selector: 'vx-icon',
  template,
})
export class VxIconComponent implements OnInit {

  @Input() icon: string | undefined
  @Input() variant: VxColorVariant | undefined

  constructor() { }

  ngOnInit(): void {
  }

  get iconClass() {
    const classes: string[] = [ 'bi' ]

    classes.push(`bi-${this.icon}`)

    return classes
  }

}
