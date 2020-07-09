import { Injectable, Injector } from "@angular/core";
import { Observable } from 'rxjs';

import { BaseApi } from './api';

@Injectable()
export class AuthApi extends BaseApi {

	constructor(
		injector: Injector
	) {
		super(injector);
		this.base = this.Config.get("api");
	}

	public login(data: any): Observable<any> {
		let url = this.url("/login");
		return this.post(url, data);
	}

	public GetUsers(): Promise<any> {
		let url = this.url("/users").get();
		return this.ApiService
			.getApi(url)
			.toPromise();
	}
	public PostUsers(data: any): Promise<any> {
		let url = this.url("/users").get();
		return this.ApiService
			.postApi(url, data)
			.toPromise();
	}
	public PutUser(id: string, data: any): Promise<any> {
		let url = this.url("/user/:id")
			.params({ id: id })
			.get();
		return this.ApiService
			.putApi(url, data)
			.toPromise();
	}

	public PostChangePassword(id: string, data: any): Promise<any> {
		let url = this.url("user/:id/change-password")
			.params({ id: id })
			.get();
		return this.ApiService
			.postApi(url, data)
			.toPromise();
	}

}
