import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { CommonLayout_ROUTES } from '../shared/routes/common-layout.routes';
import { FullLayout_ROUTES } from '../shared/routes/full-layout.routes';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: CommonLayout_ROUTES,
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: FullLayout_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
