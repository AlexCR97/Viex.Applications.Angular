import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsPageComponent } from './pages/ButtonsPage/buttons-page.component';
import { CardsPageComponent } from './pages/CardsPage/cards-page.component';
import { MenusPageComponent } from './pages/MenusPage/menus-page.component';
import { TooltipsPageComponent } from './pages/TooltipsPage/tooltips.component';

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsPageComponent,
  },
  {
    path: 'cards',
    component: CardsPageComponent,
  },
  {
    path: 'menus',
    component: MenusPageComponent,
  },
  {
    path: 'tooltips',
    component: TooltipsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
