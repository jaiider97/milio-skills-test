import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {LoginComponent} from './login/login.component'
import {RouterModule} from '@angular/router'
import {AuthRoutingModule} from './login-routing.module'

@NgModule({
  exports: [LoginComponent],
  imports: [CommonModule, RouterModule, AuthRoutingModule],
  declarations: [LoginComponent],
})
export class AuthModule {}
