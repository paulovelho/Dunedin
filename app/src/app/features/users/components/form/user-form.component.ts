import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AppConfig } from "@app/app.config";
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { ErrorHandler } from '@services/error-handler/error-handler.service';
import { Helper } from "@services/helpers/helper.service";
import { Toaster } from "@services/toaster/toaster.service";

import * as Users from '../../index';

@Component({
	selector: 'user-form',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges { 

	public loading: boolean = true;
	public action: string = "Formulário";
	public newPassword: string = null;
	public validate: boolean = false;

	public userForm: FormGroup;

	@Input() user: Users.Model;
	@Output() userChange: EventEmitter<Users.Model> = new EventEmitter<Users.Model>();

	constructor(
		private fb: FormBuilder,
		private Config: AppConfig,
		private Service: Users.Service,
		private ErrorHandler: ErrorHandler,
		private Helper: Helper,
		private Toaster: Toaster
	){
		this.Initialize();
	}

	private Initialize() {
		this.buildForm();
	}

	private buildForm(): void {
		this.userForm = this.fb.group({
			name: ['', Validators.required],
			email: ['', Validators.required],
			role: ['', Validators.required]
		});
	}

	public hide(): void {
		this.userForm.reset();
		this.user = null;
		this.userChange.emit(null);
	}

	public toggleStatus(): void {
		this.Service.toggleStatus(this.user)
			.then((usr) => {
				let message = null;
				this.user.active = usr.active;
				if(usr.active) {
					this.Toaster.success("Usuário ativado!");
				} else {
					this.Toaster.warning("Usuário desativado!");
				}
			})
			.catch((err) => {
				this.ErrorHandler.ValidationError(err.data);
			});
	}

	public resetPassword(): void {
		this.Service.resetPassword(this.user)
			.then((data: any) => {
				console.info(data);
				this.newPassword = data.password;
				this.Toaster.success("Senha alterada! Nova senha: ["+data.password+"]");
			})
			.catch((err) => {
				this.ErrorHandler.ValidationError(err.data);
			});
	}

	private save(): void {
		this.Service.save(this.user)
			.then((result) => {
				this.hide();
			})
			.catch((err) => {
				this.ErrorHandler.ValidationError(err.data);
			});
	}

	public onSubmit(): void {
		this.validate = true;
		if(this.userForm.valid) {
			this.user.from(this.userForm.value);
			this.save();
		} else {
			this.Toaster.warning("Erros na validação do usuário!");
		}
	}

	ngOnChanges(changes) {
		if (this.user && this.user.id) {
			this.action = "Editar Usuário";
			this.userForm.setValue(this.user.getFormData(), { onlySelf: true })
		} else {
			this.action = "Novo Usuário";
			this.validate = false;
			this.userForm.reset();
		}
	}

}
