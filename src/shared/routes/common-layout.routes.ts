import { Routes, RouterModule } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: () => import('../../app/pages/pages.module').then(m => m.PagesModule)
    },
/*     { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }, */
];
