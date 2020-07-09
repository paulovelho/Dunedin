import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable()
export class Store {

	@Output() newLogin = new EventEmitter<any>();

	constructor(
	) {
		this.init();
	}

	private init(): void {
	}

	public setToken(token: string): void {
		localStorage.setItem("dunedin-token", token);
	}
	public getToken(): string {
		return localStorage.getItem("dunedin-token") || null;
	}

	public setExpiration(expire: number): void {
		localStorage.setItem("expires", expire.toString());
	}
	public isExpired(): boolean {
		var ts = Math. round((new Date()). getTime() / 1000);
		let expires = localStorage.getItem("expires");
		return (+expires <= ts);
	}

	public isLogged(): boolean {
		let token = this.getToken();
		return (token != null);
	}

	public clean(): void {
		
	}

}
