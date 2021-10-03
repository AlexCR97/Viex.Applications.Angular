import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { VxBootstrapModule } from 'projects/vx-bootstrap/src/public-api';

import { AppComponent } from './app.component';
import { ButtonsPageComponent } from './pages/ButtonsPage/buttons-page.component';
import { CardsPageComponent } from './pages/CardsPage/cards-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsPageComponent,
    CardsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VxBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
