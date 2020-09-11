import { Injectable, Injector } from "@angular/core";
import { Observable } from 'rxjs';

import { BaseApi } from './api';

@Injectable()
export class GagsApi extends BaseApi {

	constructor(
		injector: Injector
	) {
		super(injector);
		this.base = this.Config.get("api");
	}

	public Search(data: any): Observable<any> {
		let url = this.url("/search")
			.queryParams(data);
		return this.get(url);
	}

}
