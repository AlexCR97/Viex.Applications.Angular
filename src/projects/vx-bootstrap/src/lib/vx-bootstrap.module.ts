import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VxButtonComponent } from './components/VxButton/vx-button.component';
import { VxSpinnerComponent } from './components/VxSpinner/vx-spinner.component';
import { VxIconComponent } from './components/VxIcon/vx-icon.component';

@NgModule({
  declarations: [
    VxButtonComponent,
    VxIconComponent,
    VxSpinnerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    VxButtonComponent,
    VxIconComponent,
    VxSpinnerComponent,
  ]
})
export class VxBootstrapModule { }
