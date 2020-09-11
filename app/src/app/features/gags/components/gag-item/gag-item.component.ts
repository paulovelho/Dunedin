import { Component, ViewEncapsulation, Input, EventEmitter } from '@angular/core';
import { AppConfig } from "@app/app.config";

import { NavigationService } from '@services/navigation/navigation.service';

import { Gag } from '../../model';

@Component({
	selector: 'gag-item',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './gag-item.component.html',
	styleUrls: ['./gag-item.component.scss']
})
export class GagItemComponent { 

	@Input() item: Gag = null;

	constructor(
		private navigation: NavigationService,
	){ }

	public getAuthor() {
    if(!this.item.author) return "";
    return this.item.author.replace(/ *\([^)]*\) */g, "");
  }

	public SearchAuthor() {
		let author = this.getAuthor();
		this.navigation.searchAuthor(author);
	}

}
