import { Injectable, Output, EventEmitter } from "@angular/core";

import { AppConfig } from "@app/app.config"
import { ApiService } from "@services/api/api.service";
import { Store } from '@services/store/store.service';
import { User } from "./model";

@Injectable()
export class UsersService {

	constructor(
		private ApiService: ApiService,
		private Store: Store, 
		private Config: AppConfig
	) {
	}

	@Output() onRefresh = new EventEmitter<Array<User>>();

	public login(email: string, password: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.access({ user: email, password: password })
				.then(result => {
					if(result.success) {
						let user = new User().from(result.data.user);
						this.Store.setLoggedUser(user);
						this.Store.setToken(result.data.token);
					}
					resolve(result);
				})
				.catch(err => reject(err));
		})
	}

	private access(data: any): Promise<any> {
		let url = this.Config.getApi("login");
		return this.ApiService.postApi(url, data).toPromise();
	}

	private refreshList(): void {
		this.getAll()
			.then((u) => {
				this.onRefresh.emit(u);
			});
	}

	public getAll(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.ApiService
				.getApi(this.Config.getApi("users"))
				.toPromise()
				.then(result => {
					if(result.success) {
						let users = result.data.map(u => new User().from(u));
						resolve(users);
					} else {
						reject(result);
					}
				})
				.catch(err => reject(err));
		});
	}

	public insert(user:User): Promise<any> {
		return new Promise((resolve, reject) => {
			this.ApiService
				.postApi(this.Config.getApi("users"), user.getData())
				.toPromise()
				.then(result => {
					if(result.success) {
						this.refreshList();
						resolve(result.data);
					}
					reject(false);
				})
				.catch(err => reject(err));
		});
	}

	public callUpdateApi(user_id: string, data: any): Promise<any> {
		return new Promise((resolve, reject) => {
			this.ApiService
				.putApi(this.Config.getApi("user", { id: user_id }), data)
				.toPromise()
				.then(result => {
					if(result.success) {
						this.refreshList();
						resolve(result.data);
					}
					reject(result);
				})
				.catch(err => reject(err));
		});
	}

	public update(user:User): Promise<any> {
		return this.callUpdateApi(user.id, user.getData())
			.then((u) => {
				console.info(u);
				let logged = this.Store.getLoggedUser();
				if(logged.id == user.id) {
					this.Store.setLoggedUser(user);
				}
			});
	}

	public toggleStatus(user: User): Promise<any> {
		return this.callUpdateApi(user.id, { active: user.active ? 0 : 1 });
	}

	public changePassword(newPassword: string) {
		return new Promise((resolve, reject) => {
			this.ApiService
				.putApi(this.Config.getApi("user_password_change"), { password: newPassword })
				.toPromise()
				.then(result => {
					if(result.success) {
						resolve(result.data);
					}
					reject(result);
				})
				.catch(err => reject(err));
		});
	}

	public resetPassword(user: User) {
		return new Promise((resolve, reject) => {
			this.ApiService
				.putApi(this.Config.getApi("user_password_reset", { id: user.id }), null)
				.toPromise()
				.then(result => {
					if(result.success) {
						resolve(result.data);
					}
					reject(result);
				})
				.catch(err => reject(err));
		});
	}

	public save(user: User): Promise<any> {
		if(user.id) {
			return this.update(user);
		} else {
			return this.insert(user);
		}
	}

	public logout(): void {
    this.Store.clean();
	}

}
