import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ErrorComponent } from './pages/error/error.component';

import { AuthGuardService } from '@services/auth/auth-guard.service';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	// {
	// 	path: 'app', 
	// 	canActivate: [AuthGuardService],
	// 	loadChildren:
	// 		() => import('@app/pages/pages.module').then(m => m.PagesModule)
	// },
	{
		path: 'dashboard',
		canActivate: [ AuthGuardService ],
		loadChildren: () => import('@app/features/dashboard/module').then(m => m.DashboardModule),
	},
	{ 
		path: 'login',
		loadChildren: 
			() => import('@app/features/login/module').then(m => m.LoginModule),
	},
	{ path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
		preloadingStrategy: PreloadAllModules,
	 // useHash: true
});