import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';

import { AppConfig } from './app.config';

import { LOCALE_ID } from '@angular/core';

import { ApiService } from './services/api/api.service';
import { ApiManager } from './services/api/api-manager.service';
import { ApiInterceptor } from './services/api/api.interceptor';
import { ErrorHandler } from './services/error-handler/error-handler.service';
import { Toaster } from './services/toaster/toaster.service';

import { AuthService } from './services/auth/authentication.service';
import { AuthGuardService } from './services/auth/auth-guard.service';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
	providers: [
		ApiService,
		ApiManager,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiInterceptor,
			multi: true,
		},

		AppConfig,
		ErrorHandler,
		Toaster,

		AuthGuardService,
		AuthService,

		{ provide: LOCALE_ID, useValue: 'pt-BR' }
	],
  exports: [RouterModule]
})
export class AppRoutingModule { }
