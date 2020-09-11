import { Component, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'search-bar',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

	public query: string = "";
	public author: string = "";

	@Output() search = new EventEmitter();

	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			if(params["q"]) this.query = params["q"];
			if(params["author"]) this.author = params["author"];
			if(params["run"]) this.filter();
		});
	}

	private updateUrl(data): void {
		this.router.navigate( [],
		{
			relativeTo: this.route,
			queryParams: data, 
		});
  }

	public filter() {
		let data = {};
		if(this.query) data["q"] = this.query;
		if(this.author) data["author"] = this.author;
		this.updateUrl(data);
		this.search.emit(data);
	}

}
