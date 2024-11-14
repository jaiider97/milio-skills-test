import {Routes, RouterModule} from '@angular/router'

export const FullLayout_ROUTES: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('../../app/auth/auth.module').then((m) => m.AuthModule),
  },
]
