import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VxMaterialModule } from 'vx-material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VxMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

