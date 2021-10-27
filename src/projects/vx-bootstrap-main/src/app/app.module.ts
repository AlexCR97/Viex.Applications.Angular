import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonsPageComponent } from './pages/ButtonsPage/buttons-page.component';
import { CardsPageComponent } from './pages/CardsPage/cards-page.component';
import { MenusPageComponent } from './pages/MenusPage/menus-page.component';
import { TooltipsPageComponent } from './pages/TooltipsPage/tooltips.component';
import { NotificationsPageComponent } from './pages/NotificationsPage/notifications-page.component';
import { DrawersPageComponent } from './pages/DrawersPage/drawers-page.component';
import { ModalsPageComponent } from './pages/ModalsPage/modals-page.component';
import { VxBootstrapModule } from 'vx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsPageComponent,
    CardsPageComponent,
    MenusPageComponent,
    TooltipsPageComponent,
    NotificationsPageComponent,
    DrawersPageComponent,
    ModalsPageComponent,
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
