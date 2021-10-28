import { Component, OnInit } from '@angular/core';
import { VxActionDrawerItem } from 'dist/vx-bootstrap/lib/components/VxActionDrawer/VxActionDrawerItem';
import { VxDrawerBackdrop, VxDrawerPlacement } from 'dist/vx-bootstrap/lib/components/VxDrawer/VxDrawer.types';

const template = /*html*/`
<div class="container pb-5">

  <h2>Drawers</h2>
  <hr>
  <div class="mb-5"></div>

  <div class="mb-5">
    <h6>Simple Drawer</h6>
    <vx-card>
      <div body>
        <vx-drawer>
          <vx-button activator label="Click here to show a simple drawer" [outlined]="true" variant="secondary"></vx-button>
          <div header class="d-flex justify-content-between align-items-center" style="width: 100%">
            <h5 class="m-0">Simple Drawer</h5>
            <button class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
          </div>
          <div body>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis expedita quia blanditiis, deserunt excepturi non error dignissimos dolore. Officiis eum quasi perferendis earum? Optio, atque quibusdam error provident eos quae.</p>
          </div>
        </vx-drawer>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Drawer Placement</h6>
    <vx-card>
      <div body>
        <vx-flex>
          <span *ngFor="let item of drawerPlacements" class="me-3">
            <vx-drawer [placement]="item">
              <vx-button activator [label]="item" [outlined]="true" variant="secondary"></vx-button>
              <div body>
                <p>This drawer has a position of <b>{{item}}</b></p>
              </div>
            </vx-drawer>
          </span>
        </vx-flex>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Drawer Backdrop</h6>
    <vx-card>
      <div body>
        <vx-flex>
          <span *ngFor="let item of drawerBackdrops" class="me-3">
            <vx-drawer [backdrop]="item" shadow="lg">
              <vx-button activator [label]="item" [outlined]="true" variant="secondary"></vx-button>
              <div header class="d-flex justify-content-between align-items-center" style="width: 100%">
                <h5 class="m-0">{{item}} backdrop</h5>
                <button class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
              </div>
            </vx-drawer>
          </span>
        </vx-flex>
      </div>
    </vx-card>
  </div>

  <h2>Action Drawers</h2>
  <hr>
  <div class="mb-5"></div>

  <div class="mb-5">
    <h6>Simple action drawer</h6>
    <vx-card>
      <div body>
        <vx-action-drawer [actions]="simpleActionDrawerItems" placement="bottom">
          <vx-button label="Click here to open a simple Action Drawer" [outlined]="true" variant="secondary"></vx-button>
        </vx-action-drawer>
      </div>
    </vx-card>
  </div>

</div>
`

@Component({
  selector: 'app-drawers-page',
  template,
})
export class DrawersPageComponent implements OnInit {

  drawerPlacements: VxDrawerPlacement[] = [ 'bottom', 'end', 'start', 'top' ]
  drawerBackdrops: VxDrawerBackdrop[] = [ 'none', 'scroll', 'static' ]
  simpleActionDrawerItems: VxActionDrawerItem[] = [
    {
      label: 'Action 1',
    },
    {
      label: 'Action 2',
    },
    {
      label: 'Action 3',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
