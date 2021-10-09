import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Toast } from 'bootstrap';
import { VxColorVariant, VxFixedPosition } from '../../types';
import random from '../../utils/random';

const template = /*html*/`
<div
  [id]="_vxNotificationId"
  class="toast vx-notification"
  [ngClass]="vxNotificationClass"
  [ngStyle]="vxNotificationStyle"
  role="alert" aria-live="assertive" aria-atomic="true">
  
  <div class="vx-notification-close-button p-2">
    <button type="button" class="btn-close" [ngClass]="vxNotificationCloseButton" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>

  <div class="toast-body pe-4" [ngClass]="vxNotificationMessageClass">
    <ng-content></ng-content>
  </div>

</div>
`

const styles = [/*css*/`
.vx-notification {
  border-radius: 10px;
  position: relative;
}

.vx-notification-close-button {
  position: absolute;
  top: 0;
  right: 0;
}
`]

@Component({
  selector: 'vx-notification',
  template,
  styles,
})
export class VxNotificationComponent implements AfterViewInit {

  @Input() autohide = false
  @Input() color: VxColorVariant | undefined;
  @Input() delay = 3000
  @Input() width = '350px'
  
  _vxNotificationId = random.newGuid()

  constructor() { }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");

    const toastElement = document.getElementById(this._vxNotificationId)

    if (!toastElement)
      throw 'Could not initialize VxNotification because a Bootstrap Toast element was not found'

    const toast = new Toast(toastElement, {
      autohide: this.autohide,
      delay: this.delay,
    })

    toast.show()
  }

  get vxNotificationClass() {
    const classes: string[] = []

    if (this.color)
      classes.push(`bg-${this.color}`)

    return classes
  }

  get vxNotificationStyle() {
    return {
      'width': this.width,
    }
  }

  get vxNotificationCloseButton() {
    const classes: string[] = []

    if (this.color) {
      if (this.color != 'warning' && this.color != 'info' && this.color != 'light')
        classes.push('btn-close-white')
    }
    
    return classes
  }

  get vxNotificationMessageClass() {
    const classes: string[] = []

    if (this.color) {
      if (this.color != 'warning' && this.color != 'info' && this.color != 'light')
        classes.push('text-white')
    }
    
    return classes
  }
}
