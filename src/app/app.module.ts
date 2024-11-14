import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { PagesModule } from './pages/pages.module';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { CommonModule } from '@angular/common';
import { MenuItemsComponent } from './shared/components/buttons/menu-items/menu-items.component';
import { SideMenuComponent } from './shared/components/menus/side-menu/side-menu.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    CommonLayoutComponent,
    MenuItemsComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
