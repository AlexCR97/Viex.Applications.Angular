import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Popover } from 'bootstrap';
import { VxTooltipPlacement } from '../../types';
import random from '../../utils/random';

const template = /*html*/`
<span
  class="d-inline-block"
  [id]="tooltipId"
  tabindex="0">
  <ng-content></ng-content>
</span>
`

const styles = [/*css*/`
.vx-tooltip {
  border-radius: 10px;
}

.vx-tooltip .popover-body {
  padding: 0.4rem 0.8rem;
}
`]

@Component({
  selector: 'vx-tooltip',
  template,
  styles,
  encapsulation: ViewEncapsulation.None,
})
export class VxTooltipComponent implements AfterViewInit {

  @Input() message = 'This is a tooltip'
  @Input() placement: VxTooltipPlacement = 'auto'

  tooltipId = random.newGuid()

  constructor() { }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.tooltipId);
    const popoverElement = document.getElementById(this.tooltipId)
    console.log("popoverElement:", popoverElement);

    if (!popoverElement)
      throw 'Could not initialize VxTooltip because no Bootstrap Popover element was found.'

    new Popover(popoverElement, {
      content: this.message,
      trigger: 'hover',
      placement: this.placement,
      customClass: 'vx-tooltip shadow',
    })
  }

}
