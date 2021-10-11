import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Offcanvas } from 'bootstrap';
import { VxComponentSize } from '../../types';
import random from '../../utils/random';
import { VxDrawerBackdrop, VxDrawerPlacement } from './VxDrawer.types';

const template = /*html*/`
<span (click)="onActivatorClicked()">
  <ng-content select="[activator]"></ng-content>
</span>

<div [id]="vxDrawerId" class="offcanvas" [ngClass]="vxDrawerClass" tabindex="-1">

  <div class="offcanvas-header">
    <ng-content select="[header]"></ng-content>
  </div>

  <div class="offcanvas-body">
    <ng-content select="[body]"></ng-content>
  </div>

</div>
`

@Component({
  selector: 'vx-drawer',
  template,
})
export class VxDrawerComponent implements AfterViewInit {

  @Input() backdrop: VxDrawerBackdrop = 'static'
  @Input() placement: VxDrawerPlacement = 'start'
  @Input() shadow: VxComponentSize | undefined

  vxDrawerId = random.newGuid()

  private offcanvas!: Offcanvas

  constructor() { }

  ngAfterViewInit(): void {
    const offcanvasElement = document.getElementById(this.vxDrawerId)

    if (!offcanvasElement)
      throw 'Could not initialize VxDrawer because no Bootstrap Offcanvas element was found.'

    if (this.backdrop == 'scroll')
      offcanvasElement.setAttribute('data-bs-scroll', 'true')
    else if (this.backdrop == 'none')
      offcanvasElement.setAttribute('data-bs-backdrop', 'false')

    this.offcanvas = new Offcanvas(offcanvasElement)
  }

  get vxDrawerClass() {
    const classes: string[] = [ `offcanvas-${this.placement}` ]

    if (this.shadow) {
      if (this.shadow == 'md')
        classes.push('shadow')
      else
        classes.push(`shadow-${this.shadow}`)
    }
    
    return classes
  }

  onActivatorClicked() {
    this.offcanvas.show()
  }

}
