import { Component, OnInit } from '@angular/core';
import { VxMenuItem } from 'projects/vx-bootstrap/src/lib/components/VxMenu/VxMenuItem';
import { VxButtonVariant } from 'projects/vx-bootstrap/src/lib/types';

const template = /*html*/`
<div class="container pb-5">

  <div class="mb-5">
    <h6>Simple Menu</h6>
    <vx-card>
      <div body>
        <p>{{simpleMenuItemsMessage}}</p>
        <vx-menu [menuItems]="simpleMenuItems">
          <vx-button label="This is a simple menu" [outlined]="true" variant="secondary"></vx-button>
        </vx-menu>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Menu Shadows</h6>
    <vx-card>
      <div body>
        <vx-flex>
          <div class="mx-2">
            <vx-menu [menuItems]="noShadowMenuItems" [shadow]="undefined">
              <vx-button label="No Shadow" [outlined]="true" variant="secondary"></vx-button>
            </vx-menu>
          </div>
          <div class="mx-2">
            <vx-menu [menuItems]="smallShadowMenuItems" shadow="sm">
              <vx-button label="Small Shadow" [outlined]="true" variant="secondary"></vx-button>
            </vx-menu>
          </div>
          <div class="mx-2">
            <vx-menu [menuItems]="mediumShadowMenuItems" shadow="md">
              <vx-button label="Medium/Normal Shadow" [outlined]="true" variant="secondary"></vx-button>
            </vx-menu>
          </div>
          <div class="mx-2">
            <vx-menu [menuItems]="largeShadowMenuItems" shadow="lg">
              <vx-button label="Large Shadow" [outlined]="true" variant="secondary"></vx-button>
            </vx-menu>
          </div>
        </vx-flex>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Menu with Icon Button</h6>
    <vx-card>
      <div body>
        <p class="m-0">{{iconButtonMenuItemsMessage}}</p>
        <div class="my-3">
          <vx-flex>
            <div *ngFor="let item of buttonVariants" class="mx-2">
              <vx-menu [menuItems]="iconButtonMenuItems">
                <vx-icon-button [variant]="item"></vx-icon-button>
              </vx-menu>
            </div>
          </vx-flex>
        </div>
        <div class="my-3">
          <vx-flex>
            <div *ngFor="let item of buttonVariants" class="mx-2">
              <vx-menu [menuItems]="iconButtonMenuItems">
                <vx-icon-button [outlined]="true" [variant]="item"></vx-icon-button>
              </vx-menu>
            </div>
          </vx-flex>
        </div>
        <div class="my-3">
          <vx-flex>
            <div *ngFor="let item of buttonVariants" class="mx-2">
              <vx-menu [menuItems]="iconButtonMenuItems">
                <vx-icon-button [rounded]="true" [variant]="item"></vx-icon-button>
              </vx-menu>
            </div>
          </vx-flex>
        </div>
        <div class="my-3">
          <vx-flex>
            <div *ngFor="let item of buttonVariants" class="mx-2">
              <vx-menu [menuItems]="iconButtonMenuItems">
                <vx-icon-button [outlined]="true" [rounded]="true" [variant]="item"></vx-icon-button>
              </vx-menu>
            </div>
          </vx-flex>
        </div>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Menu Item Dividers</h6>
    <vx-card>
      <div body>
        <vx-flex>
          <div class="mx-2">
            <vx-menu [menuItems]="dividerMenuItems">
              <vx-button label="Click to see menu item divider" [outlined]="true" variant="secondary"></vx-button>
            </vx-menu>
          </div>
          <div class="mx-2">
            <vx-menu [menuItems]="multipleDividerMenuItems">
              <vx-button label="Click to see multiple menu item dividers" [outlined]="true" variant="secondary"></vx-button>
            </vx-menu>
          </div>
        </vx-flex>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Menu Items with Icons</h6>
    <vx-card>
      <div body>
        <vx-menu [menuItems]="iconMenuItems">
          <vx-button label="Click to see menu items with icons" [outlined]="true" variant="secondary"></vx-button>
        </vx-menu>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Menu Item Variants</h6>
    <vx-card>
      <div body>
        <vx-menu [menuItems]="variantMenuItems">
          <vx-button label="Click to see menu item variants" [outlined]="true" variant="secondary"></vx-button>
        </vx-menu>
      </div>
    </vx-card>
  </div>

</div>
`

@Component({
  selector: 'app-menus-page',
  template,
})
export class MenusPageComponent implements OnInit {

  simpleMenuItemsMessage = 'You have not clicked any menu item'
  simpleMenuItems: VxMenuItem[] = [
    {
      label: 'Menu Item 1',
      action: () => this.simpleMenuItemsMessage = 'You have clicked Menu Item 1',
    },
    {
      label: 'Menu Item 2',
      action: () => this.simpleMenuItemsMessage = 'You have clicked Menu Item 2',
    },
    {
      label: 'Menu Item 3',
      action: () => this.simpleMenuItemsMessage = 'You have clicked Menu Item 3',
    },
  ]

  noShadowMenuItems: VxMenuItem[] = [{ label: 'No Shadow' }]
  smallShadowMenuItems: VxMenuItem[] = [{ label: 'Small Shadow' }]
  mediumShadowMenuItems: VxMenuItem[] = [{ label: 'Medium/Normal Shadow' }]
  largeShadowMenuItems: VxMenuItem[] = [{ label: 'Large Shadow' }]

  buttonVariants: VxButtonVariant[] = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link' ]
  iconButtonMenuItemsMessage = 'You have not clicked any menu item'
  iconButtonMenuItems: VxMenuItem[] = [
    {
      label: 'Menu Item 1',
      action: () => this.iconButtonMenuItemsMessage = 'You have clicked Menu Item 1',
    },
    {
      label: 'Menu Item 2',
      action: () => this.iconButtonMenuItemsMessage = 'You have clicked Menu Item 2',
    },
    {
      label: 'Menu Item 3',
      action: () => this.iconButtonMenuItemsMessage = 'You have clicked Menu Item 3',
    },
  ]

  dividerMenuItems: VxMenuItem[] = [
    {
      label: 'This is above the divider',
    },
    {
      divider: true,
    },
    {
      label: 'This is below the divider',      
    },
  ]

  multipleDividerMenuItems: VxMenuItem[] = [
    {
      label: 'Menu Item 1',
    },
    {
      divider: true,
    },
    {
      label: 'Menu Item 2',
    },
    {
      divider: true,
    },
    {
      label: 'Menu Item 4',
    },
    {
      divider: true,
    },
    {
      label: 'Menu Item 5',
    },
  ]

  iconMenuItems: VxMenuItem[] = [
    {
      icon: 'house',
      label: 'Home',
    },
    {
      icon: 'person',
      label: 'My Profile',
    },
    {
      icon: 'gear',
      label: 'Settings',
    },
    {
      icon: 'box-arrow-left',
      label: 'Sign Out',
    },
  ]

  variantMenuItems: VxMenuItem[] = [
    {
      label: 'Select this item',
      variant: 'success'
    },
    {
      divider: true,
    },
    {
      icon: 'pencil',
      label: 'Edit',
    },
    {
      icon: 'info-circle',
      label: 'Info',
      variant: 'info'
    },
    {
      divider: true,
    },
    {
      icon: 'trash',
      label: 'Delete',
      variant: 'danger'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
