import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { VxComponentSize } from '../../types';
import { VxDrawerComponent } from '../VxDrawer/vx-drawer.component';
import { VxDrawerBackdrop, VxDrawerPlacement } from '../VxDrawer/VxDrawer.types';
import { VxActionDrawerItem } from './VxActionDrawerItem';

const template = /*html*/`
<vx-drawer [backdrop]="backdrop" [placement]="placement" [shadow]="shadow">
  <span activator>
    <ng-content></ng-content>
  </span>
  <div body>
    <li *ngFor="let item of actions"
      style="cursor: pointer"
      [ngClass]="getItemClass(item)"
      (click)="onItemClicked(item)">
      <span *ngIf="item.icon" class="me-2">
        <vx-icon [icon]="item.icon"></vx-icon>
      </span>
      <span *ngIf="!item.divider">
        {{item.label}}
      </span>
    </li>
  </div>
</vx-drawer>
`

@Component({
  selector: 'vx-action-drawer',
  template,
})
export class VxActionDrawerComponent implements AfterViewInit {

  @ViewChild(VxDrawerComponent)
  vxDrawerRef!: ElementRef

  @Input() actions: VxActionDrawerItem[] = []
  @Input() backdrop: VxDrawerBackdrop = 'static'
  @Input() placement: VxDrawerPlacement = 'start'
  @Input() shadow: VxComponentSize | undefined
  
  constructor() { }
  
  ngAfterViewInit(): void {
    const vxDrawer = (this.vxDrawerRef as any) as VxDrawerComponent
    const vxDrawerElement = document.getElementById(vxDrawer.vxDrawerId)

    if (!vxDrawerElement)
      throw 'VxDrawer HTML element not found'
      
    console.log("vxDrawerElement", vxDrawerElement)

    vxDrawerElement.style.height = 'fit-content'
    
    const vxDrawerHeader = vxDrawerElement.querySelector('.offcanvas-header')
    if (vxDrawerHeader)
      vxDrawerElement.removeChild(vxDrawerHeader)

    const vxDrawerBody = vxDrawerElement.querySelector('.offcanvas-body')
    if (vxDrawerBody)
      (vxDrawerBody as HTMLElement).style.padding = '0'
  }

  getItemClass(item: VxActionDrawerItem) {
    const classes: string[] = [ `text-${item.variant}` ]

    if (item.divider)
      classes.push('dropdown-divider')
    else
      classes.push('dropdown-item')

    return classes
  }

  onItemClicked(item: VxActionDrawerItem) {
    if (item.action)
      item.action()
  }

}
