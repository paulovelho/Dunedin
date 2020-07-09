import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

	private pagesUrl: string = "app";

	constructor(
    private router: Router
	) { }

	private urls = {
		home: "/",
	};
	private replaceUrlParams(url: string, key: string, value: string): string {
		return url.replace(new RegExp(':' + key, 'g'), value );
	}
	private buildUrl(url: string, params: any): string {
		for(let key in params) {
			let v = params[key];
			url = this.replaceUrlParams(url, key, v);
		}
		return url;
	}

	public getUrl(destination: string, params?: any): string {
		let url: string = this.urls[destination];
		if(params) url = this.buildUrl(url, params);
		return url;
	}
	public navigateTo(destination: string, params?: any): void {
		this.router.navigate([this.pagesUrl, ...this.getUrl(destination, params).split("/")]);
	}
	public changeUrl(destination: string, params?: any): void {
    window.history.replaceState({}, '', this.pagesUrl + "/" + this.getUrl(destination, params));
	}

	public goLogin(): void {
		this.router.navigate(["login"]);
	}
	public goHome(): void {
		this.navigateTo("home");
	}

}
