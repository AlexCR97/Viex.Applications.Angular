import { Component, Input, OnInit } from '@angular/core';
import { VxColorVariant, VxComponentSize, VxSpinnerAnimation } from '../../types';

const template = /*html*/`
<div [ngClass]="spinnerClass"></div>
`

@Component({
  selector: 'vx-spinner',
  template,
})
export class VxSpinnerComponent implements OnInit {

  @Input() animation: VxSpinnerAnimation = 'border'
  @Input() size: VxComponentSize | undefined
  @Input() variant: VxColorVariant | undefined

  constructor() { }

  ngOnInit(): void {
  }

  get spinnerClass() {
    const classes: string[] = [ `spinner-${this.animation}` ]

    if (this.size)
      classes.push(`spinner-${this.animation}-${this.size}`)

    if (this.variant)
      classes.push(`text-${this.variant}`)
    
    return classes
  }

}
