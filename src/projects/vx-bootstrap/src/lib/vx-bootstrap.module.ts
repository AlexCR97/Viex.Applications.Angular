import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VxButtonComponent } from './components/VxButton/vx-button.component';
import { VxSpinnerComponent } from './components/VxSpinner/vx-spinner.component';
import { VxIconComponent } from './components/VxIcon/vx-icon.component';
import { VxFlexComponent } from './components/VxFlex/vx-flex.component';
import { VxCardComponent } from './components/VxCard/vx-card.component';
import { VxMenuComponent } from './components/VxMenu/vx-menu.component';
import { VxIconButtonComponent } from './components/VxIconButton/vx-icon-button.component';
import { VxTooltipComponent } from './components/VxTooltip/vx-tooltip.component';
import { VxNotificationComponent } from './components/VxNotification/vx-notification.component';
import { VxNotificationService } from './components/VxNotification/vx-notification.service';
import { VxDrawerComponent } from './components/VxDrawer/vx-drawer.component';

@NgModule({
  declarations: [
    VxButtonComponent,
    VxIconComponent,
    VxSpinnerComponent,
    VxFlexComponent,
    VxCardComponent,
    VxMenuComponent,
    VxIconButtonComponent,
    VxTooltipComponent,
    VxNotificationComponent,
    VxDrawerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    VxButtonComponent,
    VxCardComponent,
    VxIconComponent,
    VxSpinnerComponent,
    VxFlexComponent,
    VxMenuComponent,
    VxIconButtonComponent,
    VxTooltipComponent,
    VxNotificationComponent,
    VxDrawerComponent,
  ],
  providers: [
    VxNotificationService,
  ]
})
export class VxBootstrapModule { }
