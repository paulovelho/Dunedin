import { Injectable, Injector } from "@angular/core";
import { Observable } from 'rxjs';

import { BaseApi } from './api';

@Injectable()
export class ProductsApi extends BaseApi {

	constructor(
		injector: Injector
	) {
		super(injector);
		this.base = this.Config.get("api_products");
	}


	public GetPackingEnums(): Observable<any> {
		let url = this.url("/enum/packing");
		return this.get(url);
	}


	// PRODUCTS
	public GetActiveProducts(queryStr?: any): Observable<any> {
		let url = this.url("/products");
		if(queryStr) url.queryParams(queryStr);
		return this.get(url);
	}

	public GetProductByQuery(query: string): Observable<any> {
		let url = this.url("/search/products")
			.queryParams({ q: query });
		return this.get(url);
	}

	public GetProduct(id: string): Observable<any> {
		let url = this.url("/product/:id").params({ id: id });
		return this.get(url);
	}

	public CreateProduct(data: any): Observable<any> {
		let url = this.url("/products");
		return this.post(url, data);
	}

	public UpdateProduct(id: string, data: any): Observable<any> {
		let url = this.url("/product/:id").params({ id: id });
		return this.put(url, data);
	}


	// SUPPLIERS:
	public GetAllSuppliers(queryStr?: any): Observable<any> {
		let url = this.url("/suppliers/all");
		if(queryStr) url.queryParams(queryStr);
		return this.get(url);
	}

	public GetSuppliers(queryStr?: any): Observable<any> {
		let url = this.url("/suppliers");
		if(queryStr) url.queryParams(queryStr);
		return this.get(url);
	}

	public CreateSupplier(data: any): Observable<any> {
		let url = this.url("/suppliers");
		return this.post(url, data);
	}

	public GetSupplierById(id: string): Observable<any> {
		let url = this.url("/supplier/:id").params({ id: id });
		return this.get(url);
	}

	public GetFullSupplier(id: string): Observable<any> {
		let url = this.url("/supplier/:id/full").params({ id: id });
		return this.get(url);
	}

	public UpdateSupplier(id: string, data: any): Observable<any> {
		let url = this.url("/supplier/:id").params({ id: id });
		return this.put(url, data);
	}


	// BUREAUCRACY
	public GetNCM(query: string): Observable<any> {
		let url = this.url("/codes/ncm")
			.queryParams({ query: query });
		return this.get(url);
	}
	public GetCEST(query: string): Observable<any> {
		let url = this.url("/codes/cest")
			.queryParams({ query: query });
		return this.get(url);
	}


}
