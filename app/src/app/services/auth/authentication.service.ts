import { Injectable } from '@angular/core';

import { Store } from '@services/store/store.service';

@Injectable()
export class AuthService {
	constructor(
		private Store: Store
	) {}

	public isAuthenticated(): boolean {
		return this.Store.isLogged();
	}
}
