import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@services/store/store.service';

import { AuthApi } from '@services/api/connect/auth';

@Injectable()
export class AuthService {
	constructor(
		private AuthApi: AuthApi,
		private Store: Store,
	) {}

	public login(email: string, password: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			this.AuthApi.login({
				email: email,
				password: password,
			}).subscribe(result => {
				if(!result || !result.success) {
					resolve(false);
				}
				let data = result.data;
				console.info('got data: ', data);
				this.Store.setToken(data.token);
				this.Store.setExpiration(data.expires);
				resolve(true);
			}, err => reject(err));
		});
	}

	public isAuthenticated(): boolean {
		return this.Store.isLogged();
	}
}
