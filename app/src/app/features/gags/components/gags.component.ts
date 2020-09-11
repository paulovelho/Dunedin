import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GagsService } from '../service';
import { Gag } from '../model';

@Component({
	encapsulation: ViewEncapsulation.None,
	templateUrl: './gags.component.html',
	styleUrls: ['./gags.component.scss']
})
export class GagsComponent implements OnInit {

	public loading: boolean = false;
	public searchData: any = null;
	public list: Array<Gag> = [];
	public moreContent: boolean = false;
	public noResults: boolean = false;
	public page = 0;
	public qtt = 50;

	constructor(
		private GagsService: GagsService,
	) {
	}

	ngOnInit() {
	}

	private getPage(): void {
		this.GagsService.search({ ...this.searchData, page: this.page, qtt: this.qtt })
			.subscribe(result => {
				this.list = this.list.concat(result.list);
				if(this.list.length == 0) this.noResults = true;
				this.moreContent = result.hasMore;
				this.loading = false;
			});
	}

	private resetSearch(): void {
		this.list = [];
		this.noResults = false;
		this.page = 0;
	}

	search(data): void {
		this.loading = true;
		this.resetSearch();
		this.searchData = data;
		this.getPage();
	}

	nextPage(): void {
		this.loading = true;
		this.page ++;
		this.getPage();
	}

}
