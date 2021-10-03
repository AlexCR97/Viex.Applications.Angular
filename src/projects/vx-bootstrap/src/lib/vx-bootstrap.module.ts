import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VxButtonComponent } from './components/VxButton/vx-button.component';
import { VxSpinnerComponent } from './components/VxSpinner/vx-spinner.component';
import { VxIconComponent } from './components/VxIcon/vx-icon.component';
import { VxFlexComponent } from './components/VxFlex/vx-flex.component';
import { VxCardComponent } from './components/VxCard/vx-card.component';

@NgModule({
  declarations: [
    VxButtonComponent,
    VxIconComponent,
    VxSpinnerComponent,
    VxFlexComponent,
    VxCardComponent,
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
  ]
})
export class VxBootstrapModule { }
