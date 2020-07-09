import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// directives

// components
import { MagLoaderComponent } from './theme/components/mag-loader/mag-loader.component';
import { MagLoaderAltComponent } from './theme/components/mag-loader-alt/mag-loader.component';
import { ButtonComponent } from './theme/components/forms/button/button.component';

@NgModule({
	imports: [
		CommonModule,
    FormsModule,
    ReactiveFormsModule,
	],
	declarations: [
		MagLoaderComponent,
		MagLoaderAltComponent,
		ButtonComponent,
	],
	providers: [
	],
	exports: [
		MagLoaderComponent,
		MagLoaderAltComponent,
    ButtonComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
	]
})
export class SharedModule { }
