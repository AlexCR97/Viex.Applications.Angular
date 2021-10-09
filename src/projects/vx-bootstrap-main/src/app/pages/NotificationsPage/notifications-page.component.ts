import { Component, OnInit } from '@angular/core';
import { VxNotificationComponent } from 'projects/vx-bootstrap/src/lib/components/VxNotification/vx-notification.component';
import { VxNotificationService } from 'projects/vx-bootstrap/src/lib/components/VxNotification/vx-notification.service';
import { VxColorVariant, VxFixedPosition } from 'projects/vx-bootstrap/src/lib/types';

const template = /*html*/`
<div class="container pb-5">

  <h2>Notifications</h2>
  <hr>
  <div class="mb-5"></div>

  <div class="mb-5">
    <h6>Simple Notification</h6>
    <vx-card>
      <div body>
        <vx-notification>
          Hello, world! This is a simple notification.
        </vx-notification>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Colored Notifications</h6>
    <vx-card>
      <div body class="pt-3 ps-3">
        <div *ngFor="let item of colorVariants" class="mb-3">
          <vx-notification [color]="item"><b>{{item}}</b> colored notification</vx-notification>
        </div>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Notification Width</h6>
    <vx-card>
      <div body>
        <vx-notification>This is a normal sized notification (<b>350px</b>)</vx-notification>
        <div class="mb-3"></div>
        
        <vx-notification width="450px">This notification has a width of <b>450px</b></vx-notification>
        <div class="mb-3"></div>

        <vx-notification width="100%">This notification has a width of <b>100%</b></vx-notification>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Show Notifications Programatically</h6>
    <vx-card>
      <div body>
        <vx-button label="Click here to show a notification" [outlined]="true" variant="secondary" (click)="onShowNotificationClicked()"></vx-button>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Show Notifications Programatically</h6>
    <vx-card>
      <div body>
        <vx-button label="Click here to show a notification" [outlined]="true" variant="secondary" (clicked)="onShowNotificationClicked()"></vx-button>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Notification Positions</h6>
    <vx-card>
    <div body class="pt-3 ps-3">
        <div *ngFor="let item of fixedPositions" class="mb-3">
          <vx-button [label]="item" [outlined]="true" variant="secondary" (clicked)="onShowPositionedNotificationClicked(item)"></vx-button>
        </div>
      </div>
    </vx-card>
  </div>

</div>
`

@Component({
  selector: 'app-notifications-page',
  template,
})
export class NotificationsPageComponent implements OnInit {

  colorVariants: VxColorVariant[] = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark' ]

  fixedPositions: VxFixedPosition[] = [ 'bottomCenter', 'bottomLeft', 'bottomRight', 'center', 'centerLeft', 'centerRight', 'topCenter', 'topLeft', 'topRight' ]

  constructor(
    private vxNotifications: VxNotificationService,
  ) { }

  ngOnInit(): void {
  }

  onShowNotificationClicked() {
    this.vxNotifications.show({
      autohide: true,
      color: 'success',
      contentMessage: 'This notification was shown programatically!',
    })
  }

  onShowPositionedNotificationClicked(position: VxFixedPosition) {
    this.vxNotifications.show({
      color: 'secondary',
      delay: 1000,
      contentMessage: `This notification has a position of ${position}`,
      position: position,
    })
  }

}
