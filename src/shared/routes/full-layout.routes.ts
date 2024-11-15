import {Routes, RouterModule} from '@angular/router'

export const FullLayout_ROUTES: Routes = [

  {
    path: '',
    loadChildren: () => import('../../app/auth/auth.module').then((m) => m.AuthModule),
  },
]
