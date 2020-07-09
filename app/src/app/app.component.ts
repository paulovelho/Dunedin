import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';

import { AppConfig } from './app.config';

import { Store } from './services/store/store.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template:`<router-outlet></router-outlet>`,
})
export class AppComponent implements AfterViewInit { 

	constructor(
		private Config: AppConfig,
		private Store: Store,
	) {
		this.loadConfig();
	}
	
	ngAfterViewInit(): void {
		document.getElementById('preloader').style['display'] = 'none';
	}

	private loadConfig(): void {
		this.Config.load();
	}

}
