import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { AppConfig } from "@app/app.config";

import * as Users from '../../index';

@Component({
	selector: 'users-list',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent { 

	public users: Array<Users.Model> = [];
	public loading: boolean = true;

	@Output() userClick = new EventEmitter<null | Users.Model>();

	constructor(
		private Config: AppConfig,
		private Service: Users.Service
	){
		this.Initialize();
	}

	private Initialize() {
		this.reload();
		this.watch();
	}

	private watch(): void {
		this.Service.onRefresh.subscribe(u => { 
			this.users = u; 
		});
	}

	public reload(): void {
		this.loading = true;
		this.Service.getAll()
			.then(users => {
				this.users = users;
				this.loading = false;
			})
			.catch(error => {
				this.loading = false;
			});
	}

	public addUser(): void {
		this.userClick.next();
	}

	public editUser(user: Users.Model): void {
		this.userClick.next(user);
	}

}
