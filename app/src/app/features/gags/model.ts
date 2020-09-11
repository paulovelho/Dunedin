import { Validators} from '@angular/forms';
import { BaseModel } from "@app/services/base-model/base-model";
import { formatDate } from "@angular/common";

export class Gag extends BaseModel {

	public id: string;
	public content: string;
	public author: string;
	public location: string;
	public origin: string;
	public date: Date;
	public used_in: string;

	public fields = ["id", "content", "author", "location", "origin", "date", "used_in"];

	public getOrigin() {
		switch (this.origin) {
			case "twitter":
				return `<i class="fab fa-twitter"></i>&nbsp; Twitter`;
				break;
			case "kindle":
				return `<i class="fa fa-book"></i>&nbsp; Kindle`;
			default:
				return `<i class="fa fa-question-circle"></i> Unknown (${this.origin})`;
		}
	}

	public getLocation() {
		switch (this.origin) {
			case "twitter":
				return `<a href="${this.location}" target="_blank">${this.location}</a>`
			default:
				return this.location;
		}
	}

}
