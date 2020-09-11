import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { AppConfig } from "@app/app.config";

import { Gag } from '../../model';

@Component({
	selector: 'gag-list',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './gag-list.component.html',
	styleUrls: ['./gag-list.component.scss']
})
export class GagListComponent { 

	public loading: boolean = true;

	@Input() gags: Array<Gag> = [];
	@Output() itemClick = new EventEmitter<null | Gag>();

	constructor(
	){
		this.Initialize();
	}

	private Initialize() {
	}

}
