import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';

import { AppConfig } from "@app/app.config"
import { GagsApi } from "@services/api/connect/gags";
import { Store } from '@services/store/store.service';

import { Gag } from "./model";

@Injectable()
export class GagsService {

	constructor(
		private GagsApi: GagsApi,
	) { }

	public search(data: any): Observable<any> {
		return this.GagsApi.Search(data)
			.map(result => {
				if(!result.success) {
					return { hasMore: false, list: [] };
				}
				let list = result.data.map(g => new Gag().from(g));
				return {
					hasMore: result.has_more,
					list: list,
				}
			});
	}
}
