import { Component, ViewEncapsulation } from '@angular/core';
import { AppConfig } from "@app/app.config";

import * as Users from '../index';

@Component({
	selector: 'users-component',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent {

	public user: Users.Model = null;

	constructor(
		private Config:AppConfig
	){ }

	public userClicked(u): void {
		if(!u) u = new Users.Model();
		this.user = u;
	}

}
