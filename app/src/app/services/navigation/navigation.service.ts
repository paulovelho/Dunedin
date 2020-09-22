import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

	private pagesUrl: string = "";

	constructor(
    private router: Router
	) { }

	private urls = {
		home: "gags",
		search: "gags",
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
		console.info("returning " + url);
		return url;
	}
	public navigateTo(destination: string, params?: any): void {
		const navigation = [...this.getUrl(destination, params).split("/")];
		console.info("navigation: ", navigation);
		this.router.navigate(navigation);
	}
	public changeUrl(destination: string, params?: any): void {
    window.history.replaceState({}, '', this.pagesUrl + "/" + this.getUrl(destination, params));
	}

	public goLogin(): void {
		this.router.navigate(["login"]);
	}
	public goHome(): void {
		console.info("going home");
		this.navigateTo("home");
	}
	public searchAuthor(author: string): void {
		const url = this.getUrl('search');
		console.info("going to ", url);
		this.router.navigate([	url], { queryParams: { author: author, q: 0 } });
	}

}
