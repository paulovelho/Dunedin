import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import { Store } from '@services/store/store.service';
import { emailValidator } from '@services/validators/email.validator';
import { Toaster } from '@services/toaster/toaster.service';
import { NavigationService } from '@services/navigation/navigation.service';

import { AuthService } from '@services/auth/authentication.service';

import { AppConfig } from '@app/app.config';

@Component({
	selector: 'login',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public form:FormGroup;
	public clientTitle: string;
	public version: string;

	private homeRedirect: string = "/app";

	constructor(
		private fb:FormBuilder,
		private router: Router,
		private activeRoute: ActivatedRoute,
		private appConfig: AppConfig,
		private Store: Store,
		private AuthService: AuthService,
		private NavigationService: NavigationService,
		private Toaster: Toaster,
	) {
		this.buildForm();
	}

	ngOnInit() {
		this.checkLogged();
		this.clientTitle = this.appConfig
				.getTitle();
		this.version = this.appConfig.get('version');
	}

	private buildForm() {
		this.form = this.fb.group({
			'email': ['', Validators.compose([Validators.required, emailValidator])],
			'password': ['', Validators.compose([Validators.required])]
		});
		this.form.patchValue({});
	}

	public checkLogged(): void {
		return;
		if(this.Store.isLogged()) {
			this.router.navigate([this.homeRedirect]);
		}
	}

	public Login(): void {
		let data: any = this.form.value;
		if(this.form.valid) {
			this.AuthService.login(data.email, data.password)
				.then(success => {
					if(success) this.NavigationService.goHome();
				});
		} else {

		}
	}

}
