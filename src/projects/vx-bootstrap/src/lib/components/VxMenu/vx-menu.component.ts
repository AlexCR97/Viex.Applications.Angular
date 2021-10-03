import { Component, Input, OnInit } from '@angular/core';
import { VxComponentSize } from '../../types';
import { VxMenuItem } from './VxMenuItem';

const template = /*html*/`
<div class="dropdown">
  <span data-bs-toggle="dropdown">
    <ng-content></ng-content>
  </span>
  <ul class="dropdown-menu" [ngClass]="menuItemClass">
    <li *ngFor="let item of menuItems"
      style="cursor: pointer"
      [ngClass]="getMenuItemClass(item)"
      (click)="onMenuItemClicked(item)">
      <span *ngIf="item.icon" class="me-2">
        <vx-icon [icon]="item.icon"></vx-icon>
      </span>
      <span *ngIf="!item.divider">
        {{item.label}}
      </span>
    </li>
  </ul>
</div>
`

@Component({
  selector: 'vx-menu',
  template,
})
export class VxMenuComponent implements OnInit {

  @Input() menuItems: VxMenuItem[] = []
  @Input() shadow: VxComponentSize | undefined = 'sm'
  
  constructor() { }

  ngOnInit(): void { }

  get menuItemClass() {
    const classes: string[] = []

    if (!this.shadow)
      classes.push('shadow-none')  
    else if (this.shadow == 'md')
      classes.push('shadow')
    else
      classes.push(`shadow-${this.shadow}`)

    return classes
  }

  getMenuItemClass(item: VxMenuItem) {
    const classes: string[] = [ `text-${item.variant}` ]

    if (item.divider)
      classes.push('dropdown-divider')
    else
      classes.push('dropdown-item')

    return classes
  }

  onMenuItemClicked(item: VxMenuItem) {
    if (item.action)
      item.action()
  }

}
