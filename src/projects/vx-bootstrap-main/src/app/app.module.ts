import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { VxBootstrapModule } from 'projects/vx-bootstrap/src/public-api';

import { AppComponent } from './app.component';
import { ButtonsPageComponent } from './pages/ButtonsPage/buttons-page.component';
import { CardsPageComponent } from './pages/CardsPage/cards-page.component';
import { MenusPageComponent } from './pages/MenusPage/menus-page.component';
import { TooltipsPageComponent } from './pages/TooltipsPage/tooltips.component';
import { NotificationsPageComponent } from './pages/NotificationsPage/notifications-page.component';
import { DrawersPageComponent } from './pages/DrawersPage/drawers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsPageComponent,
    CardsPageComponent,
    MenusPageComponent,
    TooltipsPageComponent,
    NotificationsPageComponent,
    DrawersPageComponent,
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
