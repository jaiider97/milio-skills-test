import {NgModule} from '@angular/core'
import {BrowserModule, provideClientHydration} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component'
import {PagesModule} from './pages/pages.module'
import {CommonLayoutComponent} from './layouts/common-layout/common-layout.component'
import {CommonModule} from '@angular/common'
import {MenuItemsComponent} from './shared/components/buttons/menu-items/menu-items.component'
import {SideMenuComponent} from './shared/components/menus/side-menu/side-menu.component'
import {AuthModule} from './auth/auth.module'
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch} from '@angular/common/http'
import {AuthInterceptor} from './core/auth/auht.interceptor'
import {CardsComponent} from './shared/components/cards/cards.component';
import { ImgDetailsComponent } from './shared/components/img-details/img-details.component'

@NgModule({
  declarations: [AppComponent, FullLayoutComponent, CommonLayoutComponent, MenuItemsComponent, SideMenuComponent, CardsComponent, ImgDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, PagesModule, CommonModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
