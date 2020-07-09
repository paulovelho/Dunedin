//import 'pace-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// LOCALE
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { routing } from './app.routing';
import { AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';

// THEME
import { ToastrModule } from 'ngx-toastr';

// APIS
import { BaseApi } from '@services/api/connect/api';
import { AuthApi } from '@services/api/connect/auth';


// SERVICES
import { ApiService } from './services/api/api.service';
import { ApiManager } from './services/api/api-manager.service';
import { ApiInterceptor } from './services/api/api.interceptor';
import { ErrorHandler } from './services/error-handler/error-handler.service';
import { Helper } from './services/helpers/helper.service';
import { VolumeService } from './services/helpers/volume.service';
import { NavigationService } from './services/navigation/navigation.service';
import { Store } from './services/store/store.service';
import { Toaster } from './services/toaster/toaster.service';

import { AuthService } from './services/auth/authentication.service';
import { AuthGuardService } from './services/auth/auth-guard.service';


// FEATURES



registerLocaleData(localePt, 'pt-BR');

@NgModule({
	declarations: [
		AppComponent,
		ErrorComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		
		ToastrModule.forRoot(),
		FormsModule,

		// features:

		routing,
	],
	providers: [
		DatePipe,

		ApiService,
		ApiManager,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiInterceptor,
			multi: true,
		},

		BaseApi,
		AuthApi,

		AppConfig,
		ErrorHandler,
		Helper,
		VolumeService,
		NavigationService,
		Store,
		Toaster,

		AuthGuardService,
		AuthService,

		{ provide: LOCALE_ID, useValue: 'pt-BR' }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor() {
	}
}

