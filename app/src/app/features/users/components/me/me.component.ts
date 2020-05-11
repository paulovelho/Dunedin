import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AppConfig } from "@app/app.config";

import { ErrorHandler } from '@services/error-handler/error-handler.service';
import { Store } from '@services/store/store.service';
import { Toaster } from "@services/toaster/toaster.service";

import * as Users from '../../index';

@Component({
	selector: 'users-me-profile',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './me.component.html',
	styleUrls: ['./me.component.scss']
})
export class MeComponent { 

	public validate: boolean = false;
	public passFormShow: boolean = false;

	public user: Users.Model = null;
	public meForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private Config:AppConfig,
		private ErrorHandler: ErrorHandler,
		private Store: Store, 
		private Toaster: Toaster,
		private Service: Users.Service
	){
		this.Initialize();
	}

	private Initialize() {
		this.loadUser();
		this.buildForm();
	}

	private loadUser(): void {
		this.user = this.Store.getLoggedUser();
		console.info("user: ", this.user);
	}

	private buildForm(): void {
		this.meForm = this.fb.group({
			password: ['', Validators.required],
			confirm: ['', Validators.required],
		});
	}

	private matchingPass(): boolean {
		let passData = this.meForm.value;
		if (passData.password == passData.confirm) return true;
		this.Toaster.warning("Senhas não conferem!");
		return false;
	}

	public passFormToggle(): void {
		this.passFormShow = !this.passFormShow;
	}

	public onSubmit(): void {
		this.validate = true;
		if ( !this.matchingPass() ) return;
		if ( this.meForm.valid ) {
			this.Service.changePassword(this.meForm.value.password)
				.then(data => {
					console.info(data);
					this.Toaster.success("Senha alterada com sucesso!");
				})
				.catch((err) => {
					this.ErrorHandler.ValidationError(err.data);
				});
		} else {
			this.Toaster.warning("Senha não pode ser vazia");
		}
	}

}
