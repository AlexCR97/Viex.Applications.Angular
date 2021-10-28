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
import { VxModalComponent } from './components/VxModal/vx-modal.component';
import { CommonModule } from '@angular/common';
import { VxActionDrawerComponent } from './components/VxActionDrawer/vx-action-drawer.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
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
    VxModalComponent,
    VxActionDrawerComponent,
  ],
  exports: [
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
    VxModalComponent,
    VxActionDrawerComponent,
  ],
  providers: [
    VxNotificationService,
  ]
})
export class VxBootstrapModule { }
