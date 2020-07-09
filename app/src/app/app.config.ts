import { Injectable } from '@angular/core';

import { Store } from '@app/services/store/store.service';

import { EnvironmentConfig, ClientData } from '../environments/interface';
import { environment } from '../environments/environment';
import { apiData } from '../environments/api';

@Injectable()
export class AppConfig {

  private envName: string = null;
  private env: EnvironmentConfig;
  private api: any;
  private clients: Array<ClientData>;
  private clientData: ClientData = null;

	config:any;

	constructor(
    private Store: Store
	){
    this.env = <EnvironmentConfig> environment;
    this.api = apiData;
    this.envName = this.env.envName;
		this.config = this.getMainConfig();
	}

	getMainConfig(): any {
		return {
			name: 'Dunedin',
			title: 'Dunedin Gag Library',
			pageTitle: "Duneding Gag Library",
			version: '1.0.0',
		};
	}

	public getEnv(): string {
	  return this.envName;
	}
	public get(key: string): any {
	  return this.env[key];
	}

	public load(): AppConfig {
		if(!environment) {
			throw new Error("Environment not available ");
		}
		return this;
	}

	public getTitle(): string {
		return this.getMainConfig().title;
	}

}
